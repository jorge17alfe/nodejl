const express = require("express");
const router = express.Router();
const { isLoggedIn} = require("../lib/auth");

const pool = require("../database");

router.get("/add", isLoggedIn, (req, res) => {
  res.render("links/add");
});

router.post("/add", isLoggedIn, async (req, res) => {
  const { title, url, description } = req.body;

  if (title == "" || url == "") {
    res.redirect("/links/add");
    return;
  }

  const { id } = req.body;
  // console.log(req.body);
  const newLink = {
    title,
    url,
    description,
    user_id:req.user.username
  };
  
  // console.log(newLink);
  if (!id) {
    await pool.query("INSERT INTO links set ?", [newLink]);
    req.flash("success", "Link saved successfully");
  } else {
  //  delete newLink.user_id
    await pool.query("UPDATE links SET ? WHERE id =?", [newLink, id]);
    req.flash("success", "Link updated successfully");
  }
  // res.send("<h3>ok data received</h3>");
  res.redirect("/links");
});

router.get("/", isLoggedIn, async (req, res) => {
  const links = await pool.query("SELECT * FROM links WHERE user_id = ?", [req.user.username]);
  res.render("links/list", { links: links });
});

router.get("/delete/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE id = ?", [id]);
  req.flash("messageError", "Link deleted successfully");
  res.redirect("/links");
});

router.get("/edit/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const link = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  res.render("links/add", { link: link[0] });
});

module.exports = router;
