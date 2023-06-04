import mongoose from "mongoose";


export interface IcreateUser extends mongoose.Document{

    title:String;
   userName:String;
    mailId:String;
    mobileNumber:Number;
    password:String;
}

export const createUserInfoSchema = new mongoose.Schema({
    title:{ type :String},
    userName:{ type :String},
    mailId:{ type :String},
    mobileNumber:{ type :Number},
    password:{ type :String},
},
{
    versionKey:false,
    timestamps:true,
    collection:'Users'
})