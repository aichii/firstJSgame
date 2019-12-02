const readlineSync = require('readline-sync')

exports.getBillAmount = () => {
  const billAmount = Number(readlineSync.question('How much was the bill?'))
  if (isNaN(billAmount) || billAmount < 0){
    console.log("That's not a valid number!")
    return getBillAmount()
  }else{
    return billAmount
  }
}

exports.getTipPercent = () => {
  const tipPercent = Number(readlineSync.question('What percentage do you want to tip?'))
  if (isNaN(tipPercent) || tipPercent < 0){
    console.log("That's not a valid number!")
    return getTipPercent()
  }else{
    return tipPercent
  }
}

exports.getPartySize = () => {
  const partySize = Number(readlineSync.question('How many people are in your party?'))
  if (isNaN(partySize) || partySize < 1){
    console.log("That's not a valid number!")
    return getPartySize()
  }else{
    return partySize
  }
}
