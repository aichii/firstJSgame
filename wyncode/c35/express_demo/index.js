const express = require("express")

const app = express()
app.use(express.static('public'))

const factoids = [
  { quote: "arrow functions", author: "Adoniram Vargas" },
  { quote: "never stop learning", author: "Brendan Guralsky" },
  { quote: "things i've learned: if you're frustrated, you're learning.", author: "William Kennedy"},
  { quote: "callback functions", author: "CSS styles web pages" },
  { quote: "!Andy loves mustard.", author: "Lazaro Quintana"},
  { quote: "css transform", author: "Adoniram Vargas" },
  { quote: "css variables", author: "Adoniram Vargas" },
  { author: "Eric Oyanadel", quote: "ES6 Functions"},
  { author: "Anna Stepanova", quote: "loops"},
  { author: "William Kennedy", quote: "css grid is better than flexbox"},
  { author: "Adoniram Vargas", quote: "forEach"},
  { author: "Brendan Guralsky", quote: "display flex"},
  { author: "Adoniram Vargas", quote: "map"},
  { author: "Jennifer Jordan", quote: "- for...  in and for ... of loops"},
  { author: "Adoniram Vargas", quote: "grid,flex"},
  { author: "Anna Stepanova", quote: "css animation"},
  { author: "Brendan Guralsky", quote: ".forEach"},
  { author: "Nicholas Quintero", quote: "andy was born in jersey"},
  { author: "William Kennedy:instagram:", quote: "HTML is easy"},
  { author: "James Kemp", quote: "Arrow functions are really cool."},
  { author: "Natalia Vaz", quote: "Dom manipulating Html"} ,
  { author: "Alexia Panameno", quote: "In JS, a local variable takes precedence over a global variable when using it in a function"},
  { author: "Gustavo Abdelnour", quote: "Arrays have prototypes"},
  { author: "Jennifer Jordan", quote: "how to use document. querySelector"},
  { author: "Andres Mejias", quote: "DOM interaction with JS"},
  { author: "Jun", quote: "arrow functions"},
  { author: "James Kemp", quote: "In ES6 we use let and const in place of var."},
  { author: "Natalia Vaz", quote: "transform property"},
  { author: "Jean Carlos De Castro", quote: "there is always more than one way to do things"},
  { author: "Alexia Panameno", quote: "Booleans can either be true or false"},
  { author: "Nicholas Quintero", quote: "you can put css directly into html elements using style attribute"},
  { author: "Gustavo Abdelnour", quote: "NaN is a number"},
  { author: "Daniel A Perez", quote: "Visual Studio Code's live share is jank"},
  { author: "Natalia Vaz", quote: "try try and try and try again .....never quit"},
  { author: "Daniel Ulerio", quote: "MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node"},
  { author: "Genny Moise", quote: "jquery, callbacks,"},
  { author: "Daniel Ulerio", quote: "Making a git commit without a commit message can cause headaches DOM stands for Document Object Model"},
  { author: "Eric Oyanadel", quote: "T.R.B.L"},
  { author: "Adoniram Vargas", quote: "git"},
  { author: "Jennifer Jordan", quote: "The power of CSS"},
  { author: "Jean Carlos De Castro", quote: "more than one way of doing things much shorter"},
  { author: "Maryali Rondon", quote: "animations in css :zany_face:"}
]

app.get("/factoids", (request, response) => {
  const author = request.query.author
  if (author) {
    response.json(factoids.filter(factoid => factoid.author.toLowerCase() === author.toLowerCase()))
  }else{
    response.json(factoids)
  }
})

app.get('/factoids/random', (request, response) => {
  response.json(factoids[Math.floor(Math.random() * factoids.length)])
})

app.listen(3000, () => console.log("The API is ON!"))

