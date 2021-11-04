let {add, subtract, num} = require('./src/calc');
const Joke = require('awesome-dev-jokes');
const moment = require('moment');


let args = process.argv;
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(Joke.getRandomJoke());
/*
let method = args[2];
let num1 = Number(args[3]);
let num2 = Number(args[4]);
console.log(method,num1, num2);

console.log(calc[method](num1,num2));*/