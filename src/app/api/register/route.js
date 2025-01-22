import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/Models/userModel.js";
import bcrypt from "bcryptjs";


export async function POST(request){
try {
    const { rigId, password } = await request.json();

    if (!rigId || !password) {
        return NextResponse.json(
          { message: "Please provide rigId and password", success: false },
          { status: 400 }
        );
      }


      await dbconnect();

      const existinguser = await User.findOne({rigId})
        if(existinguser){
            return NextResponse.json({
                message:'User Already exists',
                success:false,
               
    
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
      rigId,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        data: savedUser,
      },
      { status: 201 } 
    );
} catch (error) {
    console.error("Error in user registration:", error);

    return NextResponse.json(
      {
        message: "Error in user registration",
        success: false,
        error: error.message,
      },
      { status: 500 } 
    );
  }
}