const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Company=sequelize.define('company',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=Company;