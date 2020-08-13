#!/usr/bin/env node

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event', function() {
//   throw new Error('big error');
// });
// setTimeout(function() {
//   event.emit('some_event');
// }, 1000);

var EnhancedEventEmitter = require('./EnhancedEventEmitter');
var event = new EnhancedEventEmitter();
event.on('some_event', function() {
  throw new Error('big error');
});
setTimeout(function() {
  event.safeEmit('some_event');
}, 1000);

setTimeout(function() {
  console.log('--- after ---')
}, 2000);


