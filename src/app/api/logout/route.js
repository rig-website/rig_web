import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: '/',
      sameSite: 'strict'
    });

    return response;
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json(
      { message: "Error in Logout", success: false, error: err.message },
      { status: 500 }
    );
  }
}