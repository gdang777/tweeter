"use strict"

// const MongoClient = require('mongodb').MongoClient();
const {MongoClient} = require("mongodb");
const MONGODB_URI ="mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err,db) => {
    if(err) {
        console.log(`Failed to conect: ${MONGODB_URI}`);
        throw err;
    }
    console.log(`Connected to database : ${MONGODB_URI}`);
    db.collection("tweets").find().toArray((err, results) => {
        if(err){
            console.log("Cannot find");
            throw err;
        }
    
        // results.toArray((err, resultsArray) => {
        //     if (err) throw err;
            console.log("results.toArray:", results);
        // });
    });   
        // console.log("type of find result :", typeof result);
    db.close();
});