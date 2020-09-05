const mongoose = require('mongoose');

const patientSchema  = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
        unique:true
    }
},
    
{
    timestamps:true
}    
)

const Patients  = mongoose.model('Patient',patientSchema);
module.exports  = Patients;