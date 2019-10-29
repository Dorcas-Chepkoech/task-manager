const mongoose = require('mongoose');
//requiring the installed moongoose
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{//connecting to the db
    useNewUrlParser: true,//
    useCreateIndex: true//create indeces
});
//how we want to structure the db 8-16
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        miniLength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
    }
});
// const me = new User({
//     name: 'Dorcas',
//     email:'ATEM@gmail.com',
//     password: 'dorr5567'

// });

// me.save().then(()=>{
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!',error);
// });
// //asigning new user values andy and 
// const me = new User({
//     name: 'Andy',
//     age: 28
// });
// //save to the db and see it on the console
// me.save().then(() =>{
//     console.log(me);
// }).catch((error) =>{
//     console.log('Error!',error);
// });

// const Task = mongoose.model('Task',{
//     description: {
//         type: String
//     },
//     completed:{
//         type: Boolean
//     }
// });
// const task = new Task({
//     description: 'Learn how to handle Javascript',
//     completed: false
// });
// task.save().then(() =>{
//     console.log(task);
// }).catch ((error)=>{
//     console.log(error);
// });
const Task = mongoose.model('Task',{
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
const task = new Task({
    description: 'Understand Javascript'
});
task.save().then(() => {
    console.log(Task);
}).catch((error) => {
    console.log(error)
});
