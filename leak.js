EventEmittter = require('events').EventEmitter;

var db = new EventEmittter();

function Request () {
    var self = this;
    this.bigdata = new Array(1e6).join('*');
    this.send = function(data) {
        console.log(data);
    };
      this.onError = function () {
           self.send('we have a problem');
    };

    onData = function(info) {
        self.send(info);
    }

    db.on('data', onData);

    this.end = function() {
     db.removeListener('data', onData)

    };
}

setInterval(function() {
    var request = new Request();

    console.log(process.memoryUsage().heapUsed);
    console.log(db);
    request.end();
}, 200);