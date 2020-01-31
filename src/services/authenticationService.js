
import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';
import { transErrors, transSuccesses } from '../../lang/vi';

let saltRounds = 7;

let _register = (userRegister) => {
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
    resolve(transSuccesses.userCreated(item.username));
  });
}

module.exports = {
  register: _register
}