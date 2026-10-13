const express = require ('express')
// const users = require ('./MOCK_DATA.json')

const app = express ()
const cors = require('cors')
const PORT = 8000
const userRouter = require ('./routes/user')
const { connectMongoDb } = require ('./connection')
const { logReqRes } = require ('./middlewares')

connectMongoDb ('mongodb://localhost:27017/connect-app')
    .then (() => console.log ('MongoDB Connected'))

// Middleware - Plugin 
app.use (express.urlencoded ({extended : false}))

app.use (logReqRes ('logs.txt'))

// Routes
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:5500', // Allow only your specific frontend server
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     credentials: true
// }));
app.use(express.json())
app.use ('/api/users', userRouter)

app.listen (PORT, () => console.log (`Server running on port ${PORT}`))