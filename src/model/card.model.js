import mongoose,{Schema} from "mongoose"

const cardSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    linked: {
      type: String,
      requied: true,
      
    },
    insta: {
        type: String,
        required: true,
    },
    tweet: {
        type: String,
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
    }
  });


  export const Cards = (mongoose.models.Cards) || mongoose.model("Cards",cardSchema);





