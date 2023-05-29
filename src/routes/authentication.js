const express = require("express");
const router = express.Router();

const passport = require("passport");
const { isLoggedIn , isNotloggedIn} = require("../lib/auth");

router.get("/signup", isNotloggedIn ,  (req, res) => {
  res.render("auth/signup");
});

router.post(  "/signup",isNotloggedIn ,
  passport.authenticate("local.signup", {
    successRedirect: "/signin",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

router.get("/signin", isNotloggedIn , (req, res) => {
  res.render("auth/login");
});

router.post("/signin" , isNotloggedIn , (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })(req, res, next);
});

router.get("/profile", isLoggedIn, async (req, res) => {
  const pool = require("../database2");
  var data = await pool.query(
    "SELECT * FROM datos_usuarios WHERE id_usuario=?",
    [req.user.username]
  );
  data = data[0];
  // data.date = "2021";
  res.render("user/profile", { data });
});

router.post("/profile", isLoggedIn, async (req, res) => {
  const id_usuario = req.body.id_usuario;
  const id = req.body.id;
  delete req.body.id;
  delete req.body.id_usuario;
  delete req.body.date;

  await pool.query("UPDATE datos_usuarios SET ? WHERE id_usuario =?", [
    req.body,
    req.user.username,
  ]);
  req.flash("success", "Link updated successfully");
  res.redirect("/profile");
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logOut();
  res.redirect("signin");
});

module.exports = router;
