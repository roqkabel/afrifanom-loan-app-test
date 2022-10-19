module.exports = {
    ensureAuthenticated: function (req, res, next) {
        // return next();
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash("error_messages", "Login is required!");
      res.redirect("/login");
    },
  };