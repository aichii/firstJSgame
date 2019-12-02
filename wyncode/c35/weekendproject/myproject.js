// const readlineSync  =  require('readline-sync');

// console.log("Welcome to my game")

// let hp = 100;

//  const choiceMap = {
//      intro: {
//          text: 'You are in a jungle, try to escape',
//          option1: {
//              text: 'Left',
//              result: 'river'
//          },
//          option2: {
//             text: 'Right',
//             result: 'bush'
//          },
//      },
//      river: {
//          text: 'You are at a river, you can jump or swim',
//          option1: {
//              text: 'Jump',
//              dmg: true,
//              result: 'guide'
//          },
//          option2: {
//              text: 'Swim',
//              dmg: true,
//              result: 'monsterFight'
//          },
//      },
//      temple: {
//          text: 'You have arrived at a mystical temple!',
//          noOptions: true,
//          result: 'finish',
//      },
//      guide: {
//          text: 'You ran into a guide, do you want to follow him or not',
//          option1: {
//              text: 'Follow',
//              result: 'finish',
//          },
//          option2: {
//              text: 'Walk astray',
//              result: 'river',
//          }
//      },

//      fairy: {
//          text: "You've come across a magical fairy, do you choose to follow?",
//          option1: {
//              text: 'Follow',
//              result: 'temple',
//          },
//          option2: {
//              text: 'Walk away',
//              result: 'monsterFight'
//          }
//      },
//      monsterFight: {
//          text: 'You encountered a giant monster, You must defeat me to escape!',
//          noOptions: true,
//          dmg: true,
//          result: 'finish'
//      },

//      bush: {
//          text: "Oh no! You've approached a bush! You can either jump over cut through",
//          option1: {
//              text: "Jump",
//              dmg: true,
//              result: 'monsterFight',
//          },
//          option2: {
//             text: "Cut through",
//             dmg: true,
//             result: 'monsterFight',
//          }
//      },


//      finish: {
//          endgame: true,
//          text: 'Hooray you won!'
//      }
//  }

//  function calculateDmg() {
//     const number = Math.random()
//     const roundedNumber = number.toFixed(2)
//     if(roundedNumber > .25) {
//         hp -= 10
//         console.log(`You took damage, your hp is now ${hp}`)
//     }
//  }

//  function game(userChoice){
//     console.log(userChoice.text)
//     readlineSync.question('Press enter to continue')
//      if (userChoice.endgame) {
//         process.exit();
//      }
//      if (userChoice.noOptions) {
//         if (userChoice.dmg) calculateDmg();
//         const nextChoice = userChoice.result
//         game(choiceMap[nextChoice])
//      }
//     const optionsArray = [userChoice.option1.text, userChoice.option2.text];
//     const question = readlineSync.keyInSelect(optionsArray, 'Which is your choice?')
//     const choice = question === 0 ? userChoice.option1 : userChoice.option2;
//     if (choice.dmg) calculateDmg()
//     game(choiceMap[choice.result])
//  }

//  game(choiceMap.intro)


