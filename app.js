'use strict';

const fs = require('fs');

const events = require('./event-pool.js');
require('./logger.js');


const alterFile = (file) => {
  try {
    fs.readFile(file, (err, data) => {
      let text = data.toString().toUpperCase();
      fs.writeFile(file, Buffer.from(text), (err, data) => {
        events.emit('file-save', {status: 1, file: file, text: 'Saved Properly'});
      });
    });
  }
  catch (e) {
    console.log('something something');
    events.emit('file-error', {status:0, file: file, text: e.message});
  }

};

let file = process.argv.slice(2).shift();
alterFile(file);
