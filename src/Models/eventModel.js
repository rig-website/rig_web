import mongoose,{Schema} from "mongoose";

const eventSchema = new Schema({
    title:{
        type:String,
        required:[true , 'title is required']
    },
    description:{
        type:String,
        required:[true , 'description is required']
    }
})

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

module.exports = Event;