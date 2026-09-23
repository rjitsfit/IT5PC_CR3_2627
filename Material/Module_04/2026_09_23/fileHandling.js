// console.log ('Order')

// setTimeout (() => {
//     console.log ('Cooking')
// }, 0)

// console.log ('Next Order')

const fs = require ('fs')
const path = require ('path')

const filePath = path.join(__dirname, 'data.json')

// Sync (Simple, Blocks the threads) - Scripting
const data = fs.readFileSync (filePath, 'utf-8')
// console.log (data)

// Aysnc (Real Application Oriented)
fs.readFile (filePath, 'utf-8', (err, data) => {
    if (err)
        throw err
    console.log (data)
})


const newData = {
    "applications" : [
        {
            "id" : 1,
            "company" : "Google",
            "role" : "SDE",
            "status" : "applied",
            "appliedDate" : "2026-09-23"
        },
        {
            "id" : 2,
            "company" : "Meta",
            "role" : "SWE",
            "status" : "applied",
            "appliedDate" : "2026-09-22"
        },
        {
            "id" : 3,
            "company" : "AWS",
            "role" : "SDE",
            "status" : "applied",
            "appliedDate" : "2026-09-21"
        }
    ]
}

fs.writeFile (filePath, JSON.stringify (newData, null, 2), (err, data) => {
    if (err)
        throw err
    console.log ('Async writing successful')
})