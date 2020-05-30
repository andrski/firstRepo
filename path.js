'use strict'
const path = require('path')
var fn = path.basename(__filename)
var dirN = path.dirname(__filename)
var ext = path.extname(__filename)

console.log(ext)

const parse = path.parse(__filename)

let chalk = require('chalk');
//const pChalk = chalk.red(parse)
console.log(parse)
console.log(chalk.red(111111))