// const http = require ('http')

// const server = http.createServer ((req, res) => {
//     if (req.url === '/' && req.method === 'GET') {
//         res.writeHead (200, { 'Content-Type' : 'text/plain' })
//         res.end ('Welcome to generic API')
//     } else if (req.url === '/random' && req.method === 'GET') {
//         res.writeHead (200, { 'Content-Type' : 'application/json' })
//         res.end (JSON.stringify ({status : "OK"}))
//     } else {
//         res.writeHead (404, { 'Content-Type' : 'text/plain' })
//         res.end ('Not found')
//     }
// })

// server.listen (3000, ()=> console.log ('Server is running on 3000'))

const express = require ('express')
const app = express ()

app.get ('/', (req, res) => {
    res.send ('Welcome to generic API')
})

app.get ('/about', (req, res) => {
    res.send (`Hello ${req.query.name} ${req.query.lastname}`)
})

app.get ('/applications/:id', (req, res) => {
    res.send (`Fetching application with id ${req.params.id}`)
})

app.listen (3000, () => console.log ('Server is running on PORT 3000'))









