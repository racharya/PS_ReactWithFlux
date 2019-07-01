/*
Provided file
Read our mock data and write it to a separate file called db.json
the db.json file will be read and manipulated by our api server
*/

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
