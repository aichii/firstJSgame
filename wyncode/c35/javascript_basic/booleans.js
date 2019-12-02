//console.log(true)

//the only true boolean values are true and false

//console.log(typeof true)
//console.log(typeof false)
//console.log(typeof "false")
//console.log(typeof 3)

//type coercion for booleans
//console.log(Boolean(8))  ...true
// most things are truthy
//console.log(Boolean("Hey!"))
//console.log(Boolean([1,2,3]))
//console.log(Boolean({Hello: 'world'}))

//these things are falsey.. all strings except '' are true..all arrays, even empty, are true, all objects are true

//console.log(Boolean(NaN))
//console.log(Boolean(0))
//console.log(Boolean(''))
//console.log(Boolean(null))
//console.log(Boolean(false))
//console.log(Boolean(undefined))

// || mean OR && mean AND

//what comes out?
//if there is a falsey value , the first one comes out
//if there is no falsey value but the last truthy ones comes out

//console.log("dog" && 5)
//comes uout to "5" ..if there are no falsey values, the last value will be the one to come out
//console.log("dog" && 0)
//comes out to 0..if there is a falsey value, the first falsey value comes out
//console.log(0 && "dog")
//console.log(5 && 4)

//what comes out?
//if there is a truthy value, the first one comes out
//if there sare no truthy values, the last falsey one comes out

//console.log(5 || 0)

//console.log(0 || 5)
//console.log("0" || "what?" || NaN)
// in a string, the first would be 0

//console.log(false || NaN || undefined || 0)
//the 0 comes out 

//console.log(!true)
//bang ! means "not"

//console.log(!7) ...without the bang, it results in 7. with the bang, it results as false

//we have the ability to write our own parenthesis in boolean situations...refer to the "booleans order of op" on the slideshow
//order of op...first you do all the bangs, then && then || 
//but seriously, bring your own parenthesis.

//ORs are very useful for assigning default values

//let a = 7
//a *= 4
//a-= 7
//a **= 3
//a *= -1
// plus 3000 lines like this
//a = a || 5
//we dont really know what a is, so we provide a default just in case its 0
//console.log(a)
let myName 
//3000 lines of code..
//maybe the uder is lazy and forgot to pick a name
console.log(myName || "default user")
console.log('Hello' ${myName || 'Default user'})! 'How are you')
 