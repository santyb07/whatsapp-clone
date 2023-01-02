

import mongoose from "mongoose";


const userScheme = mongoose.Schema({
    iss:{
        type:String
    },
    nbf:{
        type:Number
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true
    },
    given_name:{
        type:String
    },
    family_name:{
        type:String,
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number,
    },
    jti:{
        type:String
    }
})

const user = mongoose.model('user',userScheme)

export default user;