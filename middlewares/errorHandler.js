const errorHandler=(err,req,res,next)=>{
    console.log("err : ",err);
    const statusCode=err.code || 500;
    res.status(statusCode);
    res.json({
        status:"error",
        code:statusCode,
        data:null,
        error:err.message || "internal server error"
    });
    next();
}

module.exports=errorHandler;