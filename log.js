var winston = require('winston');

module.exports = function(module) {
    return makeLogger(module.filename);
};

function makeLogger(path)
{
//        console.log(path);
    if (path.match(/helloserver.js$/)) {
        var transports = [
            new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: 'info'
            }),
            new winston.transports.File({
                filename: 'debug.log',
                level: 'debug'
            })
        ];
        return new winston.Logger({transports: transports});
    }
};