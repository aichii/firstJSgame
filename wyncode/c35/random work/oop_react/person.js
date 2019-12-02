class Person {
    constructor(name,age,mood) {
        this.name = name
        this.age = age
        this.mood = mood
    }


render = () => (
    `
    <div class="person">
        <h3>${this.name}</h3>
        <h4>${this.age}</h4>
        <h4>${this.mood}</h4>
    </div>
    `
   )
}

export default Person