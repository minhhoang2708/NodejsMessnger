import { validationResult } from 'express-validator/check';
import { authService } from './../services/index';
import { transSuccesses } from './../../lang/vi';

const _getLoginRegister = (req, res) => {
  res.render("auth/master", {
    errors: req.flash("errors"),
    successes: req.flash("successes")
  });
}
const _getLogout = (req, res) => {
  req.logout(); // remove session passport user.
  req.flash("successes", transSuccesses.logout_success);
  return res.redirect('/login-register')
}

const _postRegister = async (req, res) => {
  let errorArr = [];
  let successArr = [];

  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach(item => {
      errorArr.push(item.msg);
    })
    req.flash("errors", errorArr);
    return res.redirect('/login-register')
  }
  let userRegister = req.body;
  try {
    let userCreateSuccess = await authService.register(userRegister, req.protocol, req.get("host"));
    successArr.push(userCreateSuccess);
    req.flash("successes", successArr);
  } catch (error) {
    errorArr.push(error);
    req.flash("errors", errorArr);
  } finally {
    return res.redirect('/login-register');
  };
}

const _verifyAccount = async (req, res) => {
  let errorArr = [],
    successArr = [];
  try {
    let verifySuccess = await authService.verifyAccount(req.params.token);
    successArr.push(verifySuccess);
    req.flash("successes", successArr);
  } catch (error) {
    errorArr.push(error);
    req.flash("errors", errorArr);
  } finally {
    res.redirect('/login-register');
  }
}

const checkLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()){ // check user is login? -> This is function of passport module.
    return res.redirect('/login-register'); // If user haven't logined yet. Redirect to login page.
  }
  next();
}

const checkLoggedOut = (req, res, next) => {
  if(req.isAuthenticated()){  // check user is login? -> This is function of passport module.
    return res.redirect('/');  // If user haven't logined yet. Redirect to login page.
  }
  next();
}

module.exports = {
  getLoginRegister: _getLoginRegister,
  getLogout: _getLogout,
  postRegister: _postRegister,
  verifyAccount: _verifyAccount,
  checkLoggedIn: checkLoggedIn,
  checkLoggedOut: checkLoggedOut
};