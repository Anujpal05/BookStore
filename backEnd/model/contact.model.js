import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        requied:true,
    },
    email:{
        type:String,
        requied:true
    },
    feedback:{
        type:String,
        required:true
    }
});

const Detail = mongoose.model("Detail" , contactSchema);

export default Detail;