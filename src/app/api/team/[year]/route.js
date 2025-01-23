import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import Member from "@/Models/memberModel.js";

export async function GET(request, { params }) {
  try {
    const { year } = params;

    if (!year) {
      return NextResponse.json(
        { message: "Year parameter is required", success: false },
        { status: 400 }
      );
    }

    await dbconnect();

    const members = await Member.find({ year });

    if (!members || members.length === 0) {
      return NextResponse.json(
        { message: `No members found for the year ${year}`, success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Members retrieved successfully",
        success: true,
        data: members,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in fetching members by year:", error);

    return NextResponse.json(
      {
        message: "An error occurred while fetching members",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
