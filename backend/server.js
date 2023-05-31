const express = require('express')
const app = express();
const port = 3000 || process.env.port
const cors = require('cors')

app.get('/', (req,res) => {
    res.send('Welcome to the backend')
})

app.post('/register', (req,res) => {
    res.send('Successfully Registered')
})

app.use(cors);
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})