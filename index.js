import express from 'express'

const PORT = 3000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({"data" : "Hello, World!"})
})

app.listen(PORT, () => {
    console.log('Server Rodando')
})