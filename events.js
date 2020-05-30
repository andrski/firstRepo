'use strict'
const EventEmitter = require('events')

const emitter = new EventEmitter()

function callbackF(data) { console.log('ON: anything ', data) }

emitter.on('anything', callbackF)
emitter.emit('anything', {
    name: 'Vasya',
     age: 25,
})

setTimeout(() => {
    emitter.emit('anything', {
        name: 'Petya',
        age: 30,
    })}, 600)

class Dispatcher extends EventEmitter {
    subscribe(eventname, callback) {
        console.log('Subscribe...')
        this.on(eventname, callback)  //ÏÎÄÏÈÑÊÀ
    }

    dispatch(eventname, data) {
        console.log('Dispatching...')
        this.emit(eventname, data)   //ÏÐÎÑËÓØÈÂÀÍÈÅ
    }
}

const dis = new Dispatcher()

dis.subscribe('aaa', (data) => { console.log('on: aaa: ', data) })

dis.dispatch('aaa', {
    name: 'Masha',
    age: 22,
})