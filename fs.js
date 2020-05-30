'use strict'

const fs = require('fs')  // FILE SYSTEM
const path = require('path')

function callbackF(err) {
    if (err) { throw err }
    else {
        console.log('folder created')
    }
}
// fs.mkdir(path.join(__dirname, 'testttt'), callbackF) //!!!!FOLDER CAN CREATED ONLY ONE TIME

const filePath = path.join(__dirname, 'testttt', 'newText.txt')

// writeFile -> перетирает контент

//fs.writeFile(filePath,'hello nodeJS\n', (err) => {
//    if (err) { throw err }
//    else { console.log('text file created') }
//})

//fs.appendFile(filePath, 'Hello nodeJS again', (err) => {
//    if (err) { throw err }
//    else { console.log('text file created') }
//})

fs.readFile(filePath, (err, content) => {
    if (err) { throw err }
    else { console.log('content: ', content) }
}) 
// we can call to Buffer-> global Object!!!