const express = require ('express')
const users = require ('./MOCK_DATA.json')
const fs = require ('fs')
const app = express ()
const PORT = 8000

// Middleware - Plugin 
app.use (express.urlencoded ({ extended : false }))

app.use ((req, res, next) => {
    fs.appendFile ('logs.txt', 
        `\n${Date.now()} : ${req.method} : ${req.path}`
    , (err, data) => {
        next ()
    })
})

// app.use ((req, res, next) => {
//     console.log ('Response of first middleware')
//     next ()
// })

app.get ('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map (user => `<li>${user.first_name} ${user.last_name}</li>`).join ('')}
    </ul>
    `

    res.send (html)
})

app.get ('/api/users', (req, res) => {
    res.json (users)
})

app.get ('/api/users/:id', (req, res) => {
    const id = Number (req.params.id)
    const user = users.find ((user) => user.id == id)
    if (!user)
        return res.status(404).json ({ message : "Not found" })
    res.json (user)
})

app.post ('/api/users', (req, res) => {
    const body = req.body
    // console.log (body)
    users.push ( { id : users.length + 1, ...body })
    fs.writeFile ('./MOCK_DATA.json', JSON.stringify (users), (err, data) => {
        if (err)
            console.log (err)
        res.status(201).json ({ message : "Success" }) 
    })
})


app.listen (PORT, ()=> console.log (`Server running on PORT ${PORT}`))