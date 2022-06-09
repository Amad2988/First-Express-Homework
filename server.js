const express = require('express')
const app = express()
const PORT = 3001

app.get('/greetings', (req,res) => {
    res.render('Hello Stranger')
})

app.get('/greeting/:name', (req, res) => {
    res.render('Show', {
        pageTitle: 'Name',
        pageHeader: 'Hello John'
    })
})

app.get('/tips', (req, res) => {
    res.render('Show', {
        pageTitle: 'tips',    
    }
    )
})

app.get('/magic', (req, res) => {
    res.render('Show', {
        pageTitle: 'Magic'
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})