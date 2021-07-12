const cars = [{
    make: 'Audi',
    model: 'A3',
    year: 2018
}, {
   make: 'Mazda',
   model: 'Miata',
   year: 1992 
}, {
    make: 'Ford',
    model: 'Mustang',
    year: 2001
}]

exports.getCars = (request, response) => {
    response.send(cars)
}

exports.getSingleCar = (request, response) => {
    const { carId } = request.params
    response.send(cars[carId])
}