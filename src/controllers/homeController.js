let _getHomeController = (req, res) => {
  res.render("main/home/home");
}

module.exports = {
  getHomeController: _getHomeController
};