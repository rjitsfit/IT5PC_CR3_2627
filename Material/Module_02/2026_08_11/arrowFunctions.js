// const greets = function () {
//     console.log ('Hello World')
// }


const greets = () => {
    console.log ('Hello')
}

// setTimeout (callback, 2000)
// function callback () {
//     console.log ('Hello World')
// }

setTimeout (function () {
    console.log ('First statement')
}, 2000)

setTimeout (() => {
    console.log ('Second statement')
}, 2500)


const numbers = [1, 2, 3, 4, 5]

// const squares = numbers.map (function (x) {
//     return Math.pow (x, 2)
// })

const squares = numbers.map ((x) => Math.pow (x, 2))

const evenNumbers = numbers.filter ((x) => x%2==0)

const accumulation = numbers.reduce ((numbers, accumulation) => accumulation += numbers, 0)
console.log (accumulation)


