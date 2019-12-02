// These are all the same...

// console.log("I said, \"Hey!, Let's go outside.\"")
// console.log('I said, "Hey!, Let\'s go outside."')
// console.log(`I said, "Hey!, Let's go outside."`)

// \n is a newline character
// \t is a tab character

// console.log(`I said,\n"Hey!, Let's go outside."`)

// This is called string concatenation, it is kind of old school

// const myName = "Andy"
// const myAge = "36"
// const myMood = "happy"

// console.log("My name is " + myName + " and my age is " + myAge + " and I am feeling " + myMood + " today!")

// This is called string interpolation.... it is better

// console.log(
//   `My name is ${myName} and my age is ${myAge} and I am feeling ${myMood} today!`
// )

// double equals checks if things are the same

// const myName = "Andy"
// const yourName = "Not Andy"

// console.log(myName == yourName)

// but it is considered "loose equality" because it can give weird results

// const myStringAge = "36"
// const myNumberAge = 36

// if you want "strict equality" (and you probably do...), use triple equals

// console.log(myStringAge == myNumberAge)
// console.log(myStringAge === myNumberAge)

// You either choose to memorize this:
// https://dorey.github.io/JavaScript-Equality-Table/
// or just use triple equals...

// comparison checks alpha order
// console.log("apple" < "banana")

// but uppercase are considered lower than lowercase (weird?)
// console.log("apple" < "APPLE")
// console.log("apple" < "Zebra")

// if you want to compare two strings that are mixed upper / lower, you must convert them first

// console.log("apple".toLowerCase() < "Zebra".toLowerCase())

// toLowerCase() is considered a "string method", it's something that any string can do...

// here is a list of all of them: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods

// console.log("Hello".includes("ell"))

// Remember, strings are immutable -- this method returns a NEW string
// const greeting = "Welcome to Miami"
// console.log(greeting.replace("Miami", "San Fran"))
// original greeting is unchanged
// console.log(greeting)
// console.log(42)

// all of these are numbers, even if they are negative or decimals...

// console.log(typeof 1.23)
// console.log(typeof 4)
// console.log(typeof -4)
// console.log(typeof 0)

// exponentiation
// console.log(3**3)

// modulus gives the whole number remainder
// console.log(27 % 2)
// console.log(26 % 2)
// expect weird results if you try a decimal
// console.log(26.2 % 2)

// math is weird with decimals and computers:
// this is not JS' fault?
// console.log(0.1 + 0.2)
// as a result, don't use decimals when computing money (the entire plot of office space should prove this out)
// use integer numbers of cents, and then divide by 100 at the very end.

// numbers are immutable, we are not "changing" zero into one
// we are reassigning it to an existing variable
// this would not work with const because they cannot be reassigned

// let num = 0
// console.log(num)
// these are all the exact same thing, just shorthand...
// num = num + 1
// console.log(num)
// num += 1
// console.log(num)
// num ++
// console.log(num)

// let num = 10
// num *= 10
// console.log(num)

// bang means not... we prefer string inequality instead of loose
// console.log(6 !== 7)

// Number methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods_2

// converts to a string representation of the rounded decimal
// console.log(1.23456.toFixed(2))

// You probably want to do math with numbers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#Methods

// console.log(Math.abs(-123))
// console.log(Math.floor(1.234))
// a random number between 0 and 1
// console.log(Math.random())

// const myStudents = ["Jun", "Jen", "Andrew", "Nico"]

// gives you a random student
// console.log(
//   myStudents[Math.floor(Math.random() * myStudents.length)]
// )
// in ruby, this would be myStudents.sample

//   `My name is ${myName} and my age is ${myAge} and I am feeling ${myMood} today!`

 function sampleScope() {
    let a = 'a'
   console.log(a)
 }
