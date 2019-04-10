'use strict';

const net = require('net');
const client = new net.Socket();
client.connect(3001, 'localhost', () => {});


const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// const events = require('./event-pool.js');
require('./logger.js');


const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const uppercase = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  read(file)
    .then(buffer => uppercase(buffer))
    .then(buffer => write(file, buffer))
    .then(success => client.write(`file-save ${file} saved properly`))
    .catch(error => client.write(`file-error ${error}`));
};

let file = process.argv.slice(2).shift();
alterFile(file);
