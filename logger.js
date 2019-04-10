'use strict';

// const events = require('./event-pool.js');

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => { });

// client.on('data', (payload) => {
//   console.log('Got some data:', payload.toString().trim());
// });

client.on('data', (payloadBuffer) => {
  let parsedPayload = JSON.parse(payloadBuffer.toString().trim());
  console.log(parsedPayload);
  let event, payload;
  [event, payload] = [parsedPayload.event, parsedPayload.payload];
  if (payloadBuffer) {
    console.error(`EVENT: ${event}
PAYLOAD: ${payload}`);
  }
});

client.on('close', () => {
  console.log('Connection Closed');
});

const err = (payload) => {
  if (payload) {
    console.error('ERROR', payload);
  }
};

const save = (payload) => {
  if (payload) {
    console.log(payload);
  }
};

// events.on('file-error', err);
// events.on('file-save', save);

// module.exports = { err, save };
