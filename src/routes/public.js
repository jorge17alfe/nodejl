const express = require('express')
const router = express.Router();
// let urlLocal = "<a href='http://localhost:"+router.get('port')+"'> inicio </a> <br>"
// urlLocal += "<a href='http://localhost:"+router.get('port')+"/about-us'>about </a> <br>"
// urlLocal += "<a href='http://localhost:"+router.get('port')+"/index'> index </a><br> "
// urlLocal += "<a href='http://localhost:"+router.get('port')+"/contact'> contact </a><br>"
let urlLocal =''
router.get("/", (req, res) => {
  res.render('public/index');
});


router.get("/about-us", (req, res) => {
  res.render('public/aboutus')
});


router.get("/contact", (req, res) => {
  res.render('public/contact')
  // res.send("<h1>Hello World..i...!</h1><p>Somos CONTACT</p>" +urlLocal);
});

module.exports = router;