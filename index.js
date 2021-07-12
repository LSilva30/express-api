

const { request, response } = require('express')
const express = require('express')                           // import Express
const { getCars, getSingleCar } = require('./src/cars')

const app = express()                                        // create an Express app

app.get('/cars/:carId', getSingleCar)                        // ':' turns it into a parameter
app.get('/cars', getCars)


app.get('/hello', (request, response) => {                   // create a request(s) to handle
    response.send('🌎🌎🌎Hello World! 🌎')
})

app.listen(3000, () => {                                     // listen on a port for requests
    console.log('Listening on http://localhost3000')
})                         