/* //HTTP request example
const http = require('http');
const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New connection...');
});
server.listen(3000);

console.log('Listening on port 3000...'); */


/* //typical use of EventEmitter with a logger module.(see logger file.)
const EventEmitter = require("events");
const Logger = require("./logger");
const logger = new Logger();
//registering a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message"); */
 
/* //emitting events and listening for them
const EventEmitter = require('events');
const emitter = new EventEmitter();

//NB. Typically, an event is raised first on a different module to signal an event. But listening MUST come before an event is raised in this code, cos of the callback i guess. This is the correct syntax.

//registering a listener using 'on' or 'addListener' methods
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
}); 

//Raising an event using emit method
//adding an event argument on .emit to pass data about the event that has happened.
emitter.emit('messageLogged', {id: 1, url: 'http://'}); */

/* //using the file system method
const fs = require('fs');

//sync syntax
const files = fs.readdirSync('./');
console.log(files); //returns [ 'app.js', 'logger.js' ]

//async syntax: always use async methods in your real-world projects
fs.readdir('$', function(err, files) {
  if (err) console.log('Error', err)
  else console.log('Result', files)
}); //same output: Result [ 'app.js', 'logger.js' ] */

/* const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory:' + totalMemory);
console.log('Free Memory:' + freeMemory); 
//the above is also written in ES6 without concatenation as: 

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`); */

/* const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj); */

/* const logger = require('./logger');
//console.log(logger);
logger("message");

//you can use jshint to check your code for errors before executing. e.g run jshint app.js */
