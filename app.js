const express=require('express');
const cors=require('cors');

const app=express();


const bodyParser=require('body-parser');

const sequelize=require('./util/database');

const CompanyRouter=require('./routes/company');
const ReviewRouter=require('./routes/review');

const Company=require('./model/company');
const Review=require('./model/review');


app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use(ReviewRouter);
// app.use(CompanyRouter);

Review.belongsTo(Company);

sequelize
// .sync({force:true})
.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=> console.log(err));