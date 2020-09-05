const Doctor = require('../../../models/doctors');


module.exports.create_doctor = async function(req,res){

 
  

    try{

  let doctor =  await  Doctor.findOne({username: req.body.username})



if(!doctor){
   await Doctor.create(req.body);
   return res.json(200,{
    message:"doc created",
   })
       
    }
    else{
        return res.json(200,{
           message: "doctor already exist",
            data:{
                doctor:doctor
            }
        })
    }
}
catch(err){
   
    return res.json(500,{
        message:'interal server error'
    }); 
}



    


  
}