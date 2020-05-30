'use strict'
const os = require('os')

console.log('operation system ' + os.platform())
console.log('architecture proc ', os.arch())

const cpu = os.cpus()
console.log('CPU ', cpu)

const OnTime = os.uptime()
console.log('work system time ', OnTime)