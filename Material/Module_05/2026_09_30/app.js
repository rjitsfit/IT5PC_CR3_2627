const express = require ('express')
// const users = require ('./MOCK_DATA.json')
const fs = require ('fs')
const app = express ()
const mongoose = require ('mongoose')
const PORT = 8000

mongoose.connect ('mongodb://127.0.0.1:27017/first-application')
.then (() => console.log ('MongoDB connected'))
.catch (err => console.log ('Some Error', err))

const userSchema = new mongoose.Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    jobTitle : {
        type : String
    },
    gender : {
        type : String
    }
})

const User = mongoose.model ('user', userSchema)


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

app.get ('/users', async (req, res) => {

    const allDbUser = await User.find ({})

    const html = `
    <ul>
        ${allDbUser.map (user => `<li>${user.firstName} ${user.lastName}</li>`).join ('')}
    </ul>
    `

    res.send (html)
})

// app.get ('/api/users', (req, res) => {
//     res.json (users)
// })

app.get ('/api/users', async (req, res) => {
    const allDbUser = await User.find ({})
    res.json (allDbUser)
})

// app.get ('/api/users/:id', (req, res) => {
//     const id = Number (req.params.id)
//     const user = users.find ((user) => user.id == id)
//     if (!user)
//         return res.status(404).json ({ message : "Not found" })
//     res.json (user)
// })

app.get ('/api/users/:id', async (req, res) => {
    const user = await User.findById (req.params.id)
    if (!user)
        return res.status(404).json ({ message : "Not found" })
    res.json (user)
})

// app.post ('/api/users', (req, res) => {
//     const body = req.body
//     // console.log (body)
//     users.push ( { id : users.length + 1, ...body })
//     fs.writeFile ('./MOCK_DATA.json', JSON.stringify (users), (err, data) => {
//         if (err)
//             console.log (err)
//         res.status(201).json ({ message : "Success" }) 
//     })
// })

app.post ('/api/users', async (req, res) => {
    const body = req.body
    if (!body.first_name || !body.last_name || !body.email)
        return res.status (400).json ({message : "Some fields are missing"})

    const result = await User.create ({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title
    })

    console.log (result)

    res.status (201).json ({ message : "Success" })
})


app.listen (PORT, ()=> console.log (`Server running on PORT ${PORT}`))