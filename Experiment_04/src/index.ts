class Person {
    private id: number
    protected name: string

    constructor (id: number, name: string) {
        this.id = id
        this.name = name
    }

    changeName (newName: string):void {
        this.name = newName
        console.log (`${this.name} is the updated name`)
    }

    register () {
        return `${this.name} has registered`
    }
}

class Employee extends Person {
    company: string

    constructor (id: number, name:string, company:string) {
        super (id, name)
        this.company = company
    }

    displayCompany ():void {
        console.log (`${this.name} works in ${this.company}`)
    }
}

const barry = new Person (1, 'Barry Allen')
// console.log (barry.register())
// barry.changeName ('Flash')

const bruce = new Employee (2, 'Bruce Wayne', 'Gotham')
bruce.displayCompany ()