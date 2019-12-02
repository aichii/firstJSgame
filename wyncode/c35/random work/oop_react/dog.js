class Dog extends Person {
constructor(name, age, mood){
    super(name, age, mood)
        this.age = age * 7
        this.mood = "woof"
    }
}

export default Dog