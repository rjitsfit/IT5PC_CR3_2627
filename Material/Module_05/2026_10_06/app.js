const express = require ('express')
// const users = require ('./MOCK_DATA.json')
const fs = require ('fs')
const app = express ()
const mongoose = require ('mongoose')
const PORT = 8000
const User = require ('./models/user')

mongoose.connect ('mongodb://127.0.0.1:27017/first-application')
.then (() => console.log ('MongoDB connected'))
.catch (err => console.log ('Some Error', err))




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

app.use (express.json ())

app
    .route ('/api/users')
    .get (async (req, res) => {
        const allDbUser = await User.find ({})
        res.json (allDbUser)
    })
    .post (async (req, res) => {
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

// PUT - Update the entire data
// PATCH - Update a fragment

app
    .route ('/api/users/:id')
    .get (async (req, res) => {
        const user = await User.findById (req.params.id)
        if (!user)
            return res.status(404).json ({ message : "Not found" })
        res.json (user)
    })
    .put (async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate (
                req.params.id,
                {
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    email : req.body.email,
                    jobTitle : req.body.jobTitle,
                    gender : req.body.gender
                },
                {
                    returnDocument : 'after',
                    runValidators : true
                }
            )
            return res.json ({ success : 'Record updated' })

        } catch (err) {
            return res.status (400).json ({ error : err.message })
        }
    })
    .patch (async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate (
                req.params.id,
                { $set : req.body },
                {
                    returnDocument : 'after',
                    runValidators : true
                }
            )

            return res.json ({ success : 'Updated record' })

        } catch (err) {
            return res.status (400).json ({ error : err.message })
        }
    })
    .delete (async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndDelete (req.params.id)

            if (!deletedUser)
                return res.status (400).json ({ error : 'User not found' })

            return res.json ({ status : 'Success' })
        } catch (err) {
            return res.status(500).json ({ error : err.message })
        }
    })


app.listen (PORT, ()=> console.log (`Server running on PORT ${PORT}`))