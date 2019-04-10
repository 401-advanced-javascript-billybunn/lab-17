'use strict';

const handleSave = require('./lib/file-save.js');
const handleError = require('./lib/file-error.js')

class Logger {
  constructor(json) {
    this.data = JSON.parse(json),
    this.event = this.data.event,
    this.payload = this.data.payload,
    this.handlers = {
      'file-save': handleSave,
      'file-error': handleError,
    };
  }

  handleEvent() {
    this.handlers[this.event](this.payload.text, this.payload.file);
  }

}

module.exports = Logger;
