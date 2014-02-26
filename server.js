var db = require('db');
var log = require('logger')(module);
var User = require('./user');

var Vasya = new User("Vasya");
var Petya = new User("Petya");

Vasya.hello(Vasya);
Petya.hello(Petya);

log(db.getPhrases("Run successful"));

//git comment
//git comment 2