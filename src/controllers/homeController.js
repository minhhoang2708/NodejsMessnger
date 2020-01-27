let _getHomeController = (req, res) => {
  res.render("main/master");
}

module.exports = {
  getHomeController: _getHomeController
};