const readlineSync = require('readline-sync')

class NumericQuestion {
  constructor(prompt, minimumNumber){
    this.prompt = prompt
    this.minimumNumber = minimumNumber
  }
  ask = () => {
      const answer = readlineSync.question(this.prompt)
      const numericAnswer = Number(answer)
      if (isNaN (numericAnswer) || numericAnswer < this.minimumNumber){
          console.log(`Nauthy nauty! ${answer} is not a valid answer. Please try again`)
          return this.ask()
      }else{
          return numericAnswer
       }
    }
  }
  
  const billAmount = (new NumericQuestion("How much was the bill?", 0)).ask()
  let tipPercent = (new NumericQuestion("What percentage do you want to tip?", 0)).ask()
  const partySize = (new NumericQuestion("How many people are in your party?", 1)).ask()
  if (partySize >= 6){
    console.log("A fixed tip of 18% is applied to parties of 6 or more")
    tipPercent = 18
  }
  
  const tipAmount = billAmount * (tipPercent / 100)
  const totalAmount = billAmount + tipAmount
  const yourShare = totalAmount / partySize
  
  console.log(`The tip should be $${tipAmount.toFixed(2)}`)
  console.log(`The total check should be $${totalAmount.toFixed(2)}`)
  console.log(`Each person should pay $${yourShare.toFixed(2)}`)

