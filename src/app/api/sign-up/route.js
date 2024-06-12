import { sendVerificationEmail } from "@/helpers/sendVerification";
import dbconnect from "@/lib/dbconnect";
import bcrypt from 'bcryptjs';


export async function POST(request){
    await dbconnect()

    try {
        const {username,email ,password}=await request
        
    } catch (error) {
        console.error("Error registering email",error)
        return Response.json(
            {
                success:false,
                message: "Error registering User"
            },
            {
                status:500
            }
        )
        
    }
}