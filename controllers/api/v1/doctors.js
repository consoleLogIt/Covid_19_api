const Doctors = require('../../../models/doctors');
const jwt = require('jsonwebtoken');

// register doctor
module.exports.create_doctor = async function(req,res){

 
  

    try{

  let doctor =  await  Doctors.findOne({username: req.body.username}).select(' -password');


// check if doctor already present 
if(!doctor){
   await Doctors.create(req.body);
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
    console.log(err);
   
    return res.json(500,{
        message:'interal server error'
    }); 
} 
}

// login doctor
module.exports.create_session = async function(req,res){
    try{
        let doctor = await Doctors.findOne({username:req.body.username});
 
        if(!doctor||doctor.password!=req.body.password)
        {
            return res.json(422,{
                message:"Invalid username or password",
            })
        }
 
        return res.json(200,{
            message:"sign in successful and is below is your webtoken",
            data:{
                token:jwt.sign(doctor.toJSON(),"thisisthkey",{expiresIn:'1000000'})
            }
        })
 
    }
    catch(err){
        console.log(err);
     return res.json(500,{
         message:'interal server error'
     }); 
    }
 }
 