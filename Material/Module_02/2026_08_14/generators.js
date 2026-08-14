function *genericFunction () {
    console.log ('First statement')
    yield 'First yield'
    console.log ('Second statement')
    yield 'Second yield'
    return 'Done'
}

const gen = genericFunction ()
// console.log (gen.next ().value)
// console.log (gen.next ().value)
// console.log (gen.next ().value)
// console.log (gen.next ().value)

for (let g of gen) {
    console.log (g)
}