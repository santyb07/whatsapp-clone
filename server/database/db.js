import mongoose from "mongoose"

import dotenv from 'dotenv';

dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection =async ()=>{
    const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-jamgjno-shard-00-00.43fkveh.mongodb.net:27017,ac-jamgjno-shard-00-01.43fkveh.mongodb.net:27017,ac-jamgjno-shard-00-02.43fkveh.mongodb.net:27017/?ssl=true&replicaSet=atlas-tdttou-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useUnifiedTopology:true
        })
        console.log('Database connected successfully.')
    }catch(error){
        console.log('Error while connecting with the database',error.message)
    }
}

export default Connection;