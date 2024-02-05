const express=require('express');

const CompanyController=require('../controller/company');

const router=express.Router();


router.get('/comapny-review/:name',CompanyController.getCompany);


module.exports=router;