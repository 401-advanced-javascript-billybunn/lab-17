'use strict';

const net = require('net');
const client = new net.Socket();
client.connect(3001, 'localhost', () => { });

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
        payload: {
          status: 1,
          file: file,
          text: 'saved properly',
        },
      });
      return client.write(payload);
    })

    .catch(error => {
      let payload = JSON.stringify({
        event: 'file-error',
        payload: {
          status: 0,
          file: file,
          text: error.message,
        },
      });
      return client.write(payload);
    });

};

let file = process.argv.slice(2).shift();
alterFile(file);
