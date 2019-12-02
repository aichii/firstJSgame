// to decide which of several actions to take

// if (1 + 1 === 2) {
//    console.log("It works!")
//}

//const myAge = 19
//const likesBeer = true

//if (myAge >= 21 && likesBeer){
  //  console.log("Have a beer")
//}
 //else if (myAge >=21) {
  //  console.log("okay fine")
 //}
   // else {
     //   console.log("nope!! not today")
    //}

//const teams = ['dolphins','marlins','panthers','heat']
//const randomTeam = teams[Math.floor(Math.random() * teams.length)]
//console.log(randomTeam)

//switch(randomTeam) {
  //  case 'dolphins':
    //    console.log
//}

//const sports = {
  //  'dolphins' : 'football',
    //'marlins' : 'baseball',
//}


//teraries are really short if/else statements
// pattern:
//condition ? consequence if true : consequence if false

//1 + 0 === 2 ? console.log("math is working") : console.log("math is broken")
//1+ 5 == 6 ? console.log("math works ") : console.log("math broken")

//try{
//    console.log(2+1)
///}catch{
 //   console.log("something went wrong")
//}

//loops pair nicely with control flow 
//array of objects is the most common data structure out there
const people = [
    {
        name: 'Andy',
        age: 36,
    }
    {
        name: 'jeremy',
        age: 33,
    }
    
       { name: 'Naomi',
        age: 0,
    }
    {
        name: 'Emma',
        age: 12,
    }
]

//people[0]

const person = people[2]
console.log(person.age)