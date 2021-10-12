const EventEmitter = require('events')

const firstEmitter = new EventEmitter()

firstEmitter.on('response', ()=>{
    console.log('data received');
})

firstEmitter.emit('response')