const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Review=sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    pros:{
        type:Sequelize.STRING,
    },
    cons:{
        type:Sequelize.STRING,
    }
});

module.exports=Review;