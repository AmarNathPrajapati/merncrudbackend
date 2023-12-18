require("dotenv").config();
const express = require('express')
const cors= require("cors")
const app = express()
const port =process.env.PORT || 5000
//connecting to database
const connectToDb = require('./db');
connectToDb();


app.use(cors())
app.use(express.json())

//routes for the different operations
app.use('/api',require('./routes/createUser'));
app.use('/api',require('./routes/fetchUser'));
app.use('/api',require('./routes/updateUser'));
app.use('/api',require('./routes/deleteUser'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})