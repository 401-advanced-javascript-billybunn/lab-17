'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const events = require('./event-pool.js');
require('./logger.js');


const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const uppercase = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  read(file)
    .then(buffer => uppercase(buffer))
    .then(buffer => write(file, buffer))
    .then(success => events.emit('file-save', { status: 1, file: file, text: 'Saved Properly' }))
    .catch(error => events.emit('file-error', { status: 0, file: file, text: error.message }));
};

let file = process.argv.slice(2).shift();
alterFile(file);
