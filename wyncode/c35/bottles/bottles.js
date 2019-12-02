const bottles = document.querySelectorAll('#larubia')

function drink() {
    console.log("A bottle of beer is being dranketh")
}

for (let i=0; i < bottles.length; i++)
bottles[i].addEventListener('click', drink)

