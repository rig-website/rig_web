import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/Models/userModel.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { rigId, password } = await request.json();

    if (!rigId || !password) {
      return NextResponse.json(
        { message: "Please provide rigId and password", success: false },
        { status: 400 }
      );
    }

    await dbconnect();

    const user = await User.findOne({ rigId });
    if (!user) {
      return NextResponse.json(
        { message: "Member is not registered", success: false },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid rigId or password", success: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        message: "Login successful", 
        success: true,
        user: {
          rigId: user.rigId,
          
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Error in Login", success: false, error: error.message },
      { status: 500 }
    );
  }
}