'use strict';

const net = require('net');
const socket = new net.Socket();

const Logger = require('./logger/logger-class.js');

const options = {
  port: process.env.PORT || 3001,
  host: process.env.HOST || 'localhost',
};

socket.connect(options, () => { });

socket.on('data', (json) => {
  const logger = new Logger(json);
  logger.handleEvent();
});

// socket.on('close')
