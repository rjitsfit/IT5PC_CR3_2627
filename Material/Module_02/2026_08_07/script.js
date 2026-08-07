function testingVar () {
    var firstNumber = 50
    if (true) {
        var firstNumber = 30
        console.log (firstNumber)
    }
    console.log (firstNumber) 
}

function testingLet () {
    let firstNumber = 30
    if (true) {
        let firstNumber = 50
        console.log (firstNumber)
    }
    console.log (firstNumber)
}

// testingVar ()
// testingLet ()

// for (let i=0; i<10; i++) {
//     console.log (i)
// }


const colors = []
colors.push ('Red')
colors.push ('Blue')
// const colors = 'Green'
console.log(colors);

