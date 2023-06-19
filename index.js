const express = require('express')
const getRouter = require('./routes/courses')

const mongoose = require('mongoose')

require('dotenv').config()
const app = express()

app.use('/api/v1/courses',getRouter)


mongoose.connect(process.env.DB_CONNECTION_URL, )
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});


app.listen(process.env.PORT,()=>{
    console.log('server runs at http://localhost:3000/');
})