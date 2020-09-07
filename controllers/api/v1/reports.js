const Reports  =  require('../../../models/report');


// get reports by status
module.exports.status = async function(req,res){
    try{

   let report =  await Reports.find(req.params).populate('patient','name phone -_id').exec();

   return res.json(200,{
    message: "report by status: "+req.params.status,
     data:{
        data :{
             report:report
         }
     }
 })

}
catch(err){
    console.log(err);
    return res.json(200,{
        message: "nothing found"
     })


}
}