const Patients = require('../../../models/patients');
const Reports = require('../../../models/report');

// create patient
module.exports.create_patient = async function(req,res){

 
  

    try{

  let patient =  await  Patients.findOne({phone: req.body.phone})

// check if patient present
if(!patient){
   await Patients.create(req.body);
   return res.json(200,{
    message:"patient created",
   })
       
    }
    else{
      await patient.populate('reports','doctor status createdAt -_id',null,{sort:{'createdAt':-1}}).execPopulate();
        return res.json(200,{
           message: "patient already exist",
            data:{
                patient:patient
            }
        })
    }
}
catch(err){
   console.log(err);
    return res.json(500,{
        message:'interal server error'
    }); 
} 
}


//create report of the patient
module.exports.create_report = async function(req,res){

 
    console.log(req.params.id);

    // return;
  req.body.patient= req.params.id; 
  console.log(req.body);
//   return;

    try{
        let patient  = await Patients.findById(req.body.patient);
        console.log(patient);


let report  =    await Reports.create(req.body);
// console.log(report);


patient.reports.push(report);
       patient.save();


   return res.json(200,{
    message:"report created",
   })
       
    
    
    
}
catch(err){
   console.log(err);
    return res.json(500,{
        message:'interal server error'
    }); 
} 
}


// get all reports of the patient
module.exports.all_reports = async function(req,res){


    try{
    let patient  = await Patients.findById(req.params.id);
    if(patient){
      await patient.populate('reports',' doctor status createdAt -_id',null,{sort:{'createdAt':-1}}).execPopulate();

        return res.json(200,{
            message: "patient's all report",
             data:{
                 reports:patient.reports
             }
         })
    }
    else{
        return res.json(200,{
            message: "patient doesnt exist",
            
         })

    }

    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message:'interal server error'
        }); 
    }



}




