const mongoose = require('mongoose');
//requiring the installed moongoose
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{//connecting to the db
    useNewUrlParser: true,//
    useCreateIndex: true//create indeces
});
