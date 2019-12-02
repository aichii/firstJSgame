const bottles = document.querySelectorAll('.bottle')

function drink(){
  // when called as a event handler function,
  // 'this' is the thing that was listening for the event
  this.classList.add('drank')
}

bottles.forEach(bottle => bottle.addEventListener('click', drink))
