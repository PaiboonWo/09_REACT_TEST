
const express = require("express");
const oracledb = require("oracledb");
require("dotenv").config();
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;
app.use(express.json());
const Login =require("../Login/Login.cjs")
oracledb.initOracleClient({
  tnsAdmin: "D:\\app\\Administrator\\product\\11.2.0\\client_1\\network\\admin",

});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());

app.get("/Login", Login.login);
app.get("/getmenu", Login.menu);
app.get("/getmainmenu",Login.mainmenu);
app.get("/getsubmenu",Login.submenu);

app.get('/ipaddress', (req, res) => {
  const ipAddress = req.ip; 
  res.json({ ip: ipAddress });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
