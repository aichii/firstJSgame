const NumericQuestion = require("./NumericQuestion")

class TipCalculator {
  constructor(){
    this.billAmount = (new NumericQuestion("How much was the bill?", 0)).ask()
    this.tipPercent = (new NumericQuestion("What percentage do you want to tip?", 0)).ask()
    this.partySize = (new NumericQuestion("How many people are in your party?", 1)).ask()
    if (this.partySize >= 6){
      console.log("A fixed tip of 18% is applied to parties of 6 or more")
      this.tipPercent = 18
    }
  }
 
  tip = () => this.billAmount * (this.tipPercent / 100)

  total = () => this.billAmount + this.tip()

  share = () => this.total() / this.partySize

  calculate = () => {
    console.log(`The tip should be $${this.tip().toFixed(2)}`)
    console.log(`The total check should be $${this.total().toFixed(2)}`)
    console.log(`Each person should pay $${this.share().toFixed(2)}`)
  }
}

module.exports = TipCalculator

  
