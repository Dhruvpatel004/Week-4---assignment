//Auth middleware 
//if name==Dhruv then only next function will run else error

const auth=(req,res,next)=>{
    let name=req.query.name
    console.log(req.query);
    if (name=='Dhruv'){
        next()
    }
    else{
        res.status(400).send({error:` Sorry ${name} , You don't have access of this page`})
    }

}
module.exports = auth