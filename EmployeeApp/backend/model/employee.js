var mongoose= require('mongoose')

var schema =mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Sal:Number
})

var EmployeeModel = mongoose.model("employeee" ,schema)
module.exports=EmployeeModel;

