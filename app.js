'use strict';

const net = require('net');
const socket = new net.Socket();

const options = {
  port: process.env.PORT || 3001,
  host: process.env.HOST || 'localhost',
};

socket.connect(options, () => { });

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

require('./logger.js');


const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const uppercase = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  read(file)
    .then(buffer => uppercase(buffer))
    .then(buffer => write(file, buffer))
    .then(success => {
      let payload = JSON.stringify({
        event: 'file-save',
        payload: { status: 1, file: file, text: 'saved properly' },
      });
      socket.write(payload);
      socket.end();
    })

    .catch(error => {
      let payload = JSON.stringify({
        event: 'file-error',
        payload: { status: 0, file: file, text: error.message },
      });
      socket.write(payload);
      socket.end();
    });

};

let file = process.argv.slice(2).shift();
alterFile(file);
