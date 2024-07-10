import mongoose from "mongoose"

const ContentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    }
})

export const Content = (mongoose.models.Content) || mongoose.model("Content",ContentSchema);