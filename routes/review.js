const express=require('express');

const ReviewController=require('../controller/review');

const router=express.Router();


router.post('/add-review',ReviewController.postReview);

router.get('/comapny-review/:name',ReviewController.getCompany);


module.exports=router;