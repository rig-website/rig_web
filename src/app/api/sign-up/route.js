import { sendVerificationEmail } from "@/helpers/sendVerification";
import dbconnect from "@/lib/dbconnect";
import UserModel from "@/model/user";
import bcrypt from 'bcryptjs';


export async function POST(request){
    await dbconnect()

    try {
        const {rigid,email ,password}=await request.json()
        const existingUserverifiedbyrigid = await UserModel.findOne({
            rigid,
            isVerified:true
        })
        
        if (existingUserverifiedbyrigid) {
                return Response.json(
                    {
                        success:false,
                        message: "ID already taken"
                    },
                    {
                        status:400
                    }
                )
        }
        const existingUserverifiedbyemail =await UserModel.findOne({email})
        if (existingUserverifiedbyemail) {
            if (existingUserverifiedbyemail.isVerified){
                return Response.json(
                    {
                        success:false,
                        message: "User already exists"
                    },
                    {
                        status:400
                    }
                )
            } else{
                const hashedpassword = await bcrypt.hash(password,10)
                existingUserverifiedbyemail.password=hashedpassword;
                await existingUserverifiedbyemail.save();
            }
        }else{
            const hashedpassword = await bcrypt.hash(password,10) 

            const newUser = new UserModel({
                rigid,
                email,
                password:hashedpassword,
                isVerified:false,
                isAcceptingMessages:true,
                messages:[]
            })
            await newUser.save()
        }
        //send verification mail
        const emailResponse=await sendVerificationEmail(
            email,
            rigid
        )
        if(!emailResponse.success) {
            return Response.json({
                success:false,
                message:emailResponse.message

            },{
                status:500
            })
        }
        return Response.json({
            success:true,
            message:"useer Registered . please verify your email"

        },{
            status:201
        })
       
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