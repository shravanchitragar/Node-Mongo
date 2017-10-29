const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion' ;

MongoClient.connect(url,(err,db)=>{

    assert.equal(err,null);

    console.log('Connected successfully!!');

    const collection = db.collection("dishes");

    collection.insertOne({"name": "idli","description": "South Indian Bf"},(err,result)=>{

        assert.equal(err,null);

        console.log('After Insert \n');

        console.log(result.ops);

        collection.find({}).toArray((err,docs)=>{

            assert.equal(err,null);

            console.log("Found");

            console.log(docs);

            db.close();


        });


    });




});