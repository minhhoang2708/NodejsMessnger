let _getHomeController = (req, res) => {
  res.render("main/home/home", {
    errors: req.flash("errors"),
    successes: req.flash("successes")
  });
}

module.exports = {
  getHomeController: _getHomeController
};