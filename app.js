var express = require("express");
let mustacheExpress = require("mustache-express");
let bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// IMPORT ROUTERS:
var indexRouter = require("./routes/index");
var zoneRouter = require("./routes/zone");
var adeslogoRouter = require("./routes/adeslogo");
var omnifoodRouter = require("./routes/omnifood");
var homelyRouter = require("./routes/homely");

var app = express();

app.set("views", "./views");
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// PAGE ROUTING:
app.use("/", indexRouter);
app.use("/zone", zoneRouter);
app.use("/adeslogo", adeslogoRouter);
app.use("/omnifood", omnifoodRouter);
app.use("/homely", homelyRouter);

module.exports = app;
