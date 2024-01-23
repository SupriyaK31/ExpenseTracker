const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');

const sequelize=require('./util/database');

const Expense=require('./models/expense');


const app=express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',async(res,req)=>{
    const expense = await Expense.findAll();
    res.json(expense);
    req.sendFile(__dirname +'/views/expense.html');
    
})
app.post('/',(res,req)=>{
  const amount=res.body.amount;
  const desc=res.body.Description;
  const Category=res.body.Category;
  Expense.create({
    title:desc,
    price:amount,
    category:Category
  }).then((result)=>{
    console.log('Expense Added');
     })
 .catch((err)=>console.log(err));
    })
sequelize.sync().then((result)=>{
    // console.log(result);
    app.listen(9000);
})
.catch((err)=>{
    console.log(err);
});