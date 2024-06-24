const EventEmitter = require("events");

const emisor = new EventEmitter();

emisor.on("saludar", (nombre) => {
  console.log(`Hola, ${nombre}`);
});

setTimeout(() => {
  emisor.emit("saludar", "Eric");
}, 1000);
