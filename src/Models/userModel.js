import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    rigId:{
        type:String,
        required:[true , 'username is required']
    },
    password:{
        type:String,
        required:[true , 'password is required']
    }
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;