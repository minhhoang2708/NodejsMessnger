let _getLoginRegister = (req, res) => {
  res.render("auth/loginRegister");
}
let _getLogout = (req, res) => {
  // DO SOMETHING LATER
}
module.exports = {
  getLoginRegister: _getLoginRegister,
  getLogout: _getLogout,
} ;