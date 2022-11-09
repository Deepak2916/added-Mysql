const Sequelize=require('sequelize')
const sequelize=new Sequelize('node-sql','root','Deepak@123',{
    dialect:'mysql',
    host:'localhost'
})

const User = require('../models/product')
console.log(User)

     User.sync();

module.exports=sequelize; 