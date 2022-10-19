const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/index");

const bcrypt = require("bcrypt");

const localAminPassportStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordFiel: "password",
    passReqToCallback: true,
  },
  async function (req, email, password, done) {
    try {
      req.flash("error_messages", "Email is incorrect!");
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw "Email is incorrect";
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw "Password is incorrect";
      }

      return done(null, user);
    } catch (error) {
      req.flash("error_messages", error);
      console.log(error);
      return done(null, false);
    }
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    console.log('user_id',id)
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = {
  localAdminStrategy: localAminPassportStrategy,
};
