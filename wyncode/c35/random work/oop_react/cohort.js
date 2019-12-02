class Cohort {
    constructor(people=[]){
        this.people = people
    }
enroll = student => {
    

}

    render = () => (
        `
        <div class="cohort">
        <h2>${this.name}</h2>
        <div clqss="students>
        ${this.people.map(person => person.render())}
        </div>
        
        </div>
        `
    )
}