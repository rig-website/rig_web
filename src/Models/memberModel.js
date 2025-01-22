import mongoose,{Schema} from "mongoose";

const memberSchema = new Schema({
    name:{
        type:String,
        required:[true , ' name is required']
    },
    linkedin:{
        type:String,
        required:[true , 'linkedin is required']
    },
    presentation:{
        type:String,
        required:[true , 'presentation is required']
    },
    position:{
        type:String,
        required:[true , 'position is required']
    },
    year:{
        type:String,
        required:[true , 'year is required']
    }
})

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema);

module.exports = Member;