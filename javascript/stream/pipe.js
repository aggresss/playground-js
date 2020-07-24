#!/usr/bin/env node

var fs = require("fs");
var r = fs.createReadStream("words.txt");
var w = fs.createWriteStream("words.copy.txt");
r.pipe(w).on("finish", function(){
    console.log("Write complete.");
});

