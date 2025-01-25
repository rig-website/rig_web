import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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

    const tokenData = {
      id: user._id,
      rigId: user.rigId
    }
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' })

    const response = NextResponse.json(
      { 
        message: "Login successful", 
        success: true,
        token: token,
        user: {
          rigId: user.rigId,
        }
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Error in Login", success: false, error: error.message },
      { status: 500 }
    );
  }
}