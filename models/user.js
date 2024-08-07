const { Sequelize } = require('sequelize');
const sequelize=require('../utils/database');

const User=sequelize.define('user',{
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
},
name:{
    type:Sequelize.STRING,
},
email:{
    type:Sequelize.STRING,
    unique: true
},
password:{
    type:Sequelize.STRING
},
ispremiumuser:{
    type:Sequelize.BOOLEAN,
    defaultValue:0
},
totalExpenses:{
    type:Sequelize.INTEGER,
    defaultValue:0
}

});

module.exports=User;