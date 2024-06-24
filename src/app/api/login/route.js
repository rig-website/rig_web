import dbconnect from "@/lib/dbconnect";
import { User } from "@/model/user.model";
import bcrypt from "bcryptjs";

export async function POST(req,res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const {rigid,email,passkey} = req.body;
    try {
        await dbconnect()
        const existingUser = await User.findOne({rigid});
        if(!existingUser){
            return res.status(400).json(
                {
                    message:'User not found Exists'
                }
            );
        }
        const isValid = await bcrypt.compare(passkey,existingUser.passkey);
        if(!isValid){
            return res.status(400).json(
                {
                    message:'Invalid passkey'
                }
            )
        }
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
