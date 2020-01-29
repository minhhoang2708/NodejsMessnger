import {validationResult} from 'express-validator/check';

const _getLoginRegister = (req, res) => {
  res.render("auth/master");
}
const _getLogout = (req, res) => {
  // DO SOMETHING LATER
}
const _postRegister = (req, res) => {
  let errorArr = [];

  let validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()){
    let errors = Object.values(validationErrors.mapped());
    errors.forEach(item => {
      errorArr.push(item.msg);
    })
    console.log(errorArr);
    return;
  }
  console.log(req.body);

}
module.exports = {
  getLoginRegister: _getLoginRegister,
  getLogout: _getLogout,
  postRegister: _postRegister,
};