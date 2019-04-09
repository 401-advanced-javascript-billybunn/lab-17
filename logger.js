'use strict';

const events = require('./event-pool.js');



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

events.on('file-error', err);
events.on('file-save', save);

module.exports = { err, save };
