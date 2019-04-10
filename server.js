'use strict';

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`));

let socketPool = {};
// let allowedEvents = ['file-error', 'file-save'];

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  console.log('Welcome', id);
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('close', () => {
    delete socketPool[id];
    console.log(`Goodbye ${id}`);
  });
});

let dispatchEvent = (json) => {
  // let payload = ;
  let {event, payload} = JSON.parse(json);
  console.log('line 27',event, payload);

  // if (allowedEvents.includes(event)) {
  // console.log(`BROADCAST: ${event}`);
  let message = {event, payload};
  for (let socket in socketPool) {
    socketPool[socket].write(JSON.stringify(message));
  }
  // }
  // else {
  //   console.log(`IGNORE: ${event}`);
  // }

};


