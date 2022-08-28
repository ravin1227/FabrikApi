import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    object:{
  
        data: Buffer,
        contentType: String,
    },
    date:{
        type: String
    }
})

export default mongoose.model("Post", PostSchema);
