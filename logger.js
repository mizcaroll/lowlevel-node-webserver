const EventEmitter = require("events");
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(message) {
        //send HTTP request
        console.log(message);
        //Raise an event
        this.emit("messageLogged", { id: 1, url: "http://" });
      }
}

module.exports = Logger;

//module.exports.log = log;
//also possible, module.exports.url = url;
//to export a single function (log) instead of the whole method, do; module.exports = log;

//NB. it is the logger module that emits/signals an event saying the message is logged.
//add an event argument on emitter.emit to pass data about the event that has happened.
