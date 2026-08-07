class SuperHero {
    constructor (superName, realName) {
        this.alias = superName
        this.citizen = realName
        console.log (
            `The real name of ${this.alias} is ${this.citizen}`
        )
    }

    superHeroName (superheroName, realName) {
        console.log (`The real name of ${superheroName} is ${realName}`)
    }

    static strength () {
        console.log ('This superhero has super strength')
    }
}

const superman = new SuperHero('Superman', 'Clark Kent')
const greenLatern = new SuperHero ('Green Latern', 'Hal Jordan')
const wonderWoman = new SuperHero ('Wonder Woman', 'Diana Prince')

SuperHero.strength ()

// superman.superHeroName ('Superman', 'Clark Kent')
// greenLatern.superHeroName ('Green Latern', 'Hal Jordan')
// wonderWoman.superHeroName ('Wonder Woman', 'Diana Prince')

class Abilities extends SuperHero {
    constructor (superName, realName, flying) {
        super (superName, realName)
        this.canFly = flying
    }

    ableToFly () {
        if (this.canFly == true) {
            console.log (`${this.alias} can fly`)
        } else {
            console.log (`${this.alias} cannot fly`)
        }
    }

}

const spiderMan = new Abilities ('Spider-Man', 'Peter Parker', false)
spiderMan.ableToFly ()

const ironMan = new Abilities ('Iron-Man', 'Tony Stark', true)
ironMan.ableToFly ()