const mongoose = require('mongoose');

const Employee = mongoose.model('employees',{
    name : {type:String},
    position: {type:String},
    dept:{type:String},
    // address
    // destination
    // approved money
});

module.exports = Employee;
