import dbconnect from "@/lib/dbconnect";
import { User } from "@/model/user.model";
import bcrypt from "bcryptjs";

export async function POST(req,res) {
    const {rigid,email,passkey} = req.body;
    try {
        await dbconnect()
        const existingUser = await User.findOne({rigid});
        if(existingUser){
            return res.status(400).json(
                {
                    message:'User already Exists'
                }
            );
        }
        const hashedPassword = await bcrypt.hash(passkey,10);
        const user = new User({
            rigid,
            email,
            passkey:hashedPassword
        });
        await user.save();
        return res.status(201).json(
            {
                message:'Successfully Done'
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message:'Server Error'
            }
        );
        
    }
}
 