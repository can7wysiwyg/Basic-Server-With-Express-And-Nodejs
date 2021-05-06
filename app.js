const express = require('express')
const { resolve } = require('path')
const app = express()

app.use(express.static('./sample'))

app.get('/', (req, res) => {
    res.status(200).sendFile(resolve(__dirname, './sample/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(resolve(__dirname, './sample/about.html'))
})




app.all('*', (req, res) => {
    res.status(404).send(`<h1>resource not found, go back to <a href="/"> home</a>`)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})