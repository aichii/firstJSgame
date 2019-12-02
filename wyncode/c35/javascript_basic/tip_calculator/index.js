//const readliync = require('readline-sync')
//const userName = readlineSync.question('May I have your name?')
//console.log(You said your name was $(userName))

const billAmount = readlineSync.question('How much was the bill?')
const tipPercent = readlineSync.question('What percentage do you want the tip?')
const partySize = readlineSync.question('How many people are in your party?')

console.log('You said the bill was $${billAmount}')
console.log('You said you wanted to tip ${tipPercent}%')
console.log('You said there were ${partySize} people in your party')

const tipAmount = billAmount * (tipPercent / 100)

console.log('You should tip ${tipAmount}...')