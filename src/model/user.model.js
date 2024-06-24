import mongoose,{Schema} from "mongoose"


const MessageSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    }
  });

const userSchema = new Schema({
    rigid: {
      type: String,
      required: true,
      unique: true
    },
    passkey: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"please use a valid email address"]
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    messages:[MessageSchema]
  });


  export const User = (mongoose.models.User) || mongoose.model("User",userSchema);





