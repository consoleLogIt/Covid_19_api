const mongoose = require('mongoose');

const reportSchema  = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patients'
    },
    doctor:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum : ['Negative', 'Travelled-Quarantine',
            'Symptoms-Quarantine', 'Positive-Admit'],
    },
   
},
    
{
    timestamps:true
}    
)

const Reports  = mongoose.model('Reports',reportSchema);
module.exports  = Reports;