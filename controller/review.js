const Review=require('../model/review');
const Company=require('../model/company');


exports.postReview=(req,res,next)=>{
    const cname=req.body.name;
    const pros=req.body.pros;
    const cons = req.body.cons;
    const rating =req.body.rating;

     Company.findOne({where:{name:cname}})
    .then(res=>{
        if(res){ // if company name already existed
            return res;
        }
        else{
             return Company.create({ // new company added
                name: cname
            })
        }
    })
    .then(company=>{
        return Review.create({
            pros:pros,
            cons:cons,
            rating:rating,
            companyId:company.id
        });
    })
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>console.log(err));    
}


exports.getCompany=(req,res,next)=>{
    const cname=req.params.name;
    Company.findOne({where:{name: cname}})
    .then((company)=>{
        if(company){

            return Review.findAll({where:{companyId : company.id}})
        }
        else{
            return null;
        }
    })
    .then(reviews=>{
        if(reviews){

            res.status(200).json(reviews);
        }
        else{
            res.json(reviews);
        }
    })
    .catch(err=> console.log(err));
}