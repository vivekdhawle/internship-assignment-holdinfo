import mongoose, { Schema } from "mongoose";
const dataSchema=new Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    last:{
        type:String,
        
    },
    buy:{
        type:String,
        
    },
    sell:{
        type:String,
        
    },
    volume:{
        type:String,
        
    },
    base_unit:{
        type:String,
        
    }

})
export const Data=mongoose.model("data",dataSchema)