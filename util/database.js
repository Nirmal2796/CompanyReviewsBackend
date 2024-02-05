const Sequelize=require('sequelize').Sequelize;

const sequelize=new Sequelize('company_reviews','root','Nirmal@27',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;