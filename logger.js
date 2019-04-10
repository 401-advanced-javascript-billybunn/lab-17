'use strict';

// const events = require('./event-pool.js');

const net = require('net');
const client = new net.Socket();

const Logger = require('./logger/logger-class.js');

client.connect(3001, 'localhost', () => { });

client.on('data', (json) => {

  const logger = new Logger(json);
  console.log('event',logger.event);
  console.log('payload',logger.payload);
  logger.handleEvent();
});
