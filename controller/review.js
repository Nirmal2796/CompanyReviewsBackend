const Review=require('../model/review');
const Company=require('../model/company');


exports.postReview=(req,res,next)=>{
    const cname=req.body.name;
    const pros=req.body.pros;
    const cons = req.body.cons;
    const rating =req.body.rating;

    Company.create({
        name:cname
    })
    .then(res=>{
       return Company.findOne({where:{name:cname}});
    })
    .then(res=>{
        return Review.create({
            pros:pros,
            cons:cons,
            rating:rating
        });
    })
    .then(res=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));    
}
