const myFam = ["Andy", "Shelley", "Naomi"]
// console.log(myFam)
// console.log(myFam[2])
// console.log(myFam[3])

// console.log(typeof myFam)
// object

// as though we had an object like this
// {
//   '0': 'Andy',
//   '1': 'Shelley',
//   '2': 'Naomi'
// }

// special method to tell if an object is an array
// console.log(Array.isArray(myFam))

// MDN Array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#

// console.log(myFam.length)
// length is a property, push(), pop() etc are methods...
// methods are functions, you need to () them

// push adds things to the end of an array
myFam.push("Beth", "Eric")

// console.log(myFam)

// pop removes the last item (and returns it...)

// const myPop = myFam.pop()

// console.log(myFam)
// console.log(myPop)

// const me = myFam.shift()
// console.log(myFam)
// console.log(me)

// const theLadies = myFam.slice(1,4)
// console.log(theLadies)
// console.log(myFam)

// const theFellas = [myFam[0], myFam[4]]
// console.log(theFellas)


// console.log(myFam.sort())
// sort mutates the caller
// so it's "permanent"
// console.log(myFam)

// it's also "broken....."

const myNums = [5, 120, 27]
// console.log(myNums.sort())
// it will convert to strings and then sort in alhpa order
// probably not what you want
// however, you can bring your own sorting function....
