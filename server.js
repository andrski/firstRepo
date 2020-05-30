'use strict';
//var http = require('http');
//var port = process.env.port || 1337;

//http.createserver(function (req, res) {
//    res.writehead(200, { 'content-type': 'text/plain' });
//    res.end('hello world\n');
//}).listen(port);
let chalk = require('chalk');

var text = require('./Data');
console.log(chalk.blue('hello nodeJS ' + text))
//console.log(__dirname)
//console.log(__filename)