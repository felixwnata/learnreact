const express = require("express");
const bodyParser = require("body-parser");

const currency = require("./models/Currency")(Currency);
console.log(currency);
