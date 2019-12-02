function createUser(name, age, mood){
    return (
        name: name,
        age: age,
        mood: mood
    )
}

const andy = createUser("Andy", 36, "caffeinated")

console.log(andy)