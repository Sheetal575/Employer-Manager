const mongoose = require('mongoose');

const Employee = mongoose.model('Booking',{
    name : {type:String},
    position: {type:String},
    dept:{type:String},
    // address
    // destination
    // approved money
});

module.exports = Employee;