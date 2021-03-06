import { check } from 'express-validator/check';
import {transValidation} from './../../lang/vi';

let _register = [
  check("email", transValidation.email_incorrect).isEmail().trim(),
  check("gender", transValidation.gender_incorrect).isIn(["male", "female"]),
  check("password", transValidation.password_incorrect).isLength({ min: 8 }),
  check("password_confirmation", transValidation.password_confimation_incorrect).custom((value, {req}) => {
    return value === req.body.password;
  })
];

module.exports = {
  register: _register
}