const mongoose = require("mongoose");
// const mongorURI = "mongodb://127.0.0.1:27017/crud_app";
const mongorURI = process.env.DATABASE;
const connectToDb = async() =>{
    await mongoose.connect(mongorURI).then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectToDb;