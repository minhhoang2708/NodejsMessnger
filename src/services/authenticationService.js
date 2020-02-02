
import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';
import { transErrors, transSuccesses, transMailer } from '../../lang/vi';
import sendMail from '../config/mailler';

let saltRounds = 7;

let _register = (userRegister, protocolEmail, hostEmail) => {
  // return new Promise để đảm bảo cho UserModel.createNew(item) được hoàn thành xong!
  return new Promise(async (resolve, reject) => {
    // Kiểm tra email đã tồn tại hay chưa
    let userByEmail = await UserModel.findByEmail(userRegister.email);
    if (userByEmail) {
      // Đã được tạo nhưng bị xóa rồi!
      if (userByEmail.deletedAt != null) {
        return reject(transErrors.email_is_be_deleted);
      }
      // Đã được tạo nhưng chưa được Active
      if (userByEmail.local.isActive == false) {
        return reject(transErrors.email_is_not_be_actived);
      }
      // Không tìm thấy email trùng nhau!
      return reject(transErrors.email_is_be_used);
    }
    let salt = bcrypt.genSaltSync(saltRounds);

    let item = {
      username: userRegister.email.split("@")[0],
      gender: userRegister.gender,
      local: {
        email: userRegister.email,
        password: bcrypt.hashSync(userRegister.password, salt),
        verifyToken: uuidv4()
      },
    }
    let user = await UserModel.createNew(item);
    //send authentication email for user successful register.
    let linkVerify = `${protocolEmail}://${hostEmail}/verify/${user.local.verifyToken}`;
    sendMail(userRegister.email, transMailer.subject, transMailer.template(linkVerify))
      .then(success => {
        resolve(transSuccesses.userCreated(item.local.email));
      })
      .catch(async (error) => {
        await UserModel.removeById(user._id);
        console.log(error);
        // remove user
        reject(transErrors.email_is_be_used);
      })


  });
}

let _verifyAccount = (token) => {
  return new Promise(async (resolve, reject) => {
    let userByToken = await UserModel.findByToken(token);
    if (!userByToken) {
      return reject(transSuccesses.token_undefined);
    }

    await UserModel.verifyByToken(token);
    resolve(transSuccesses.active_Success);
  })
}

module.exports = {
  register: _register,
  verifyAccount: _verifyAccount
}