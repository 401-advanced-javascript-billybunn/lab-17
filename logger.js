'use strict';

// const events = require('./event-pool.js');

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => { });

client.on('data', (json) => {
  let {event, payload} = JSON.parse(json);
  console.log('logger line 17', event, payload);
  console.log(typeof event);

  if (event === 'file-save') console.log('SUCCESS:', payload);
  if (event === 'file-error') console.error('ERROR:', payload);

});