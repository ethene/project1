var db = require('db');
var log = require('logger')(module);
var User = require('./user');

var Vasya = new User("Vasya");
var Petya = new User("Petya");

Vasya.hello(Vasya);

log(db.getPhrases("Run successful"));


