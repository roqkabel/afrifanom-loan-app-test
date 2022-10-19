const passport = require("passport");

exports.loginWithEmailPassword = async function (req, res, next) {
    return passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login/",
      failureFlash: true,
    })(req, res, next);
  };