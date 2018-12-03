const express = require('express')
const sls = require('serverless-http')
const app = express();
const port = 3000;

const route = require('./routes/index');

app.use("/", route);

module.exports.server = sls(app)