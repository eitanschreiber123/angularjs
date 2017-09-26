let http = require("http");
let express = require("express");
let host = "localhost";
let port = 3000;
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require('cors');

mongoose.connect('mongodb://eitan:mlab1234@ds133084.mlab.com:33084/mean');

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/",(req,res) => {
  res.sendFile("index.html");
})
