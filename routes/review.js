const express=require('express');

const ReviewController=require('../controller/review');

const router=express.Router();


router.post('/add-review',ReviewController.postReview);


module.exports=router;