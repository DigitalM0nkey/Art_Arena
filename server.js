const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io").listen(server);

require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//app.listen(process.env.PORT || 8080);
server.listen(8080, "192.168.12.77");

console.log("Listening on localhost:8080");

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

// AWS specific settings

const AWS = require("aws-sdk");
const fs = require("fs");

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

let s3 = new AWS.S3();
let filePath = "./data/file.txt";

//configuring parameters
let params = {
  Bucket: process.env.AWS_BUCKET_NAME,
  Body: fs.createReadStream(filePath),
  Key: "folder/" + Date.now() + "_" + path.basename(filePath)
};

s3.upload(params, function(err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});

// Socket Stuff

io.on("connection", function(socket) {
  socket.emit("news", { hello: "Welcome to the jungle" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
});
