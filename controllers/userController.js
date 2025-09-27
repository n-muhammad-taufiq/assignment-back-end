const Users=require('../models/userModel');

const getUser=async (req,res,next)=>{
    const id=req.params.id;
    const user=await Users.getUser(id);
    if(!user){
        const error=new Error('user not found');
        error.code=404;
        return next(error,req,res,next);    
    }
    console.log('user ',user);
    res.status(200);
    res.json({
        status:'success',
        code:200,
        data:{
        user:user
        },
        error:null
    });
}

module.exports={getUser};