 import mongoose from "mongoose";

 const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"youtubeclone"
    }).then(() => {
        console.log("Connected to database");
    }).catch(err=>{
        console.log(`sone error occured while connecting to database ${err}`);

    })

 };