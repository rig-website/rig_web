import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import Member from "@/Models/memberModel";

export async function POST(request) {
  try {
    const { name, linkedin, presentation, position, year } = await request.json();

    if (!name || !linkedin || !presentation || !position || !year) {
      return NextResponse.json(
        { message: "Please provide all details", success: false },
        { status: 400 }
      );
    }

    await dbconnect();

    const existingMember = await Member.findOne({ linkedin });
    if (existingMember) {
      return NextResponse.json({
        message: "Member already exists",
        success: false,
      });
    }

    const newMember = new Member({
      name,
      linkedin,
      presentation,
      position,
      year,
    });

    const savedMember = await newMember.save();

    return NextResponse.json(
      {
        message: "Member added successfully",
        success: true,
        data: savedMember,
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
