const express = require('express');//req express
require('./db/mongoose');//requiring db/mongoose file
const User = require('./models/user');//req user.js which is in models folder
const Task = require('./models/task');

const app = express();//invoking a fxn
const port = process.env.PORT ||3000;//read the port if it doesnt exist put a no

app.use(express.json());//for formatting, structure

app.post('/users', (req, res) => {//post- to create smth
    const user = new User(req.body);//request

    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((error) =>{
        res.status(400).send(error);
    });
});
app.get('/users', (req,res) => {
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((error) =>{
        res.status(500).send();
    })
});

app.get('/users/:id', (req, res) =>{
    const _id =req.params.id;
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send();
        }
        res.send(user);

    }).catch((e) => {
        res.status(500).send();
    });
});
app.listen(port, () => {
    console.log('Server is up on port' +port);
});