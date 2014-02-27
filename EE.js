EventEmittter = require('events').EventEmitter;

var server = new EventEmittter;

//server.on('error', function(err) {})

server.emit('error', new Error('Server Error'));
