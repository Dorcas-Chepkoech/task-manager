//CRUD create, read, update, delete
const /*mongodb*/{MongoClient, ObjectID} = require('mongodb');//importing mongodb from node_modules
//const MongoClient = mongodb.MongoClient;//created a var mongoclient called we are 
//picking a method called
//will help us connect to the database

const connectionURL = 'mongodb://127.0.0.1:27017'; 
//assigning the database to a variable
const databaseName = 'task-manager';
//const id = new ObjectID();
//console.log(id);
MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error, client) => {
    //connecting to the database
    //options objects-required
    //error used to query what we are calling(function callback)
    //client composed inside mongoclient
    if (error){
        return console.log('Unable to connect to the database');
    }
    const db = client.db(databaseName);

   /* db.collection('users').insertOne({//create your database
    name: 'Dorcas',
        age: 24});
    db.collection('users').insertMany([//insert many is a callback
        {
            name: 'prisca',
            age: 67
        },{
            name: 'penelope',
            age: 76
        }
    ],(error, result) =>{
        if (error){
            return console.log('Unable to insert documents');
        }
        console.log(result.ops);
    });
    db.collection('tasks').insertMany([
        {
            description: 'Clean the House',
            completed: true
        }, {
            description: 'Renew Inspection',
            collection: false
        }, {
            description: 'Pot plants',
            collection: false
        }
    ], (error,result) =>{
        if (error){
            return console.log('Unable to insert tasks');
        }
        console.log(result.ops);
    })
    db.collection('tasks').find({completed: false}).toArray((error,tasks) =>
    {
    });
    db.collection('users').updateOne({
        _id: new ObjectID("5db2df4f1251ec16145106da")
    }, {
        $inc: {
            age: 44
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('tasks').updateMany({
        completed: false
    },{
        $set: {
            completed: true
        }
    }).then((result)=>{
        console.log(result.modifiedCount);
    }).catch((error)=>{
        console.log(error);
    });*/
    db.collection('tasks').deleteOne({
        description: 'Clean the House'
    }).then((result) =>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});
