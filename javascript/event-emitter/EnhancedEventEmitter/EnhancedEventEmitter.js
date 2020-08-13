const EventEmitter = require('events').EventEmitter;

class EnhancedEventEmitter extends EventEmitter {
  constructor(logger) {
    super();
    this.setMaxListeners(Infinity);

  }

  safeEmit(event, ...args) {
    try {
      this.emit(event, ...args);
    }
    catch (error) {
      console.log(
        'safeEmit() | event listener threw an error [event:%s]:%o',
        event, error);
    }
  }
}

module.exports = EnhancedEventEmitter;
