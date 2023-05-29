const express = require("express");
const morgan = require("morgan");
const viewHbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const mySqlStore = require('express-mysql-session') 
const passport = require('passport')



// const {database} = require('./keys')

// // Initializations
const app = express();
// require('./lib/passport');

// // Settings
app.set("port", process.env.PORT || 5001);
// app.set("views", path.join(__dirname, "views"));
// app.engine(
//   ".hbs",
//   viewHbs({
//     defaultLayout: "main",
//     layoutsDir: path.join(app.get("views"), "layouts"),
//     partialsDir: path.join(app.get("views"), "partials"),
//     extname: ".hbs",
//     helpers: require("./lib/handlebars"),
//   })
// );
// app.set("view engine", ".hbs");

// // Middlewares
// app.use(session({ 
//   secret: "jorgeluisom1+", 
//   resave: false,
//   saveUninitialized: false,
//   store: new mySqlStore(database)
//  }));
// app.use(flash());
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session())

// // Global Variables
// app.use((req, res, next) => {
//   app.locals.nameProject = "Mi Carta Online";
//   app.locals.success = req.flash("success");
//   app.locals.messageError = req.flash("messageError");
//   app.locals.user = req.user;
//   next();
// });

// // Routes
// app.use(require("./routes/public"));
// app.use(require("./routes/authentication"));
// app.use("/links", require("./routes/links"));

// // Public
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=>{
  res.send("ASDFGHJKL")
});

console.log("hola")

// // Starting the server
app.listen(app.get("port"), () => {
  console.log("Listen in link:  http://localhost:" + app.get("port"));
});
