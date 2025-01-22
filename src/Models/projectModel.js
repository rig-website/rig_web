import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema({
    title:{
        type:String,
        required:[true , 'title is required']
    },
    description:{
        type:String,
        required:[true , 'description is required']
    }
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

module.exports = Project;