import { NextResponse } from "next/server";



export async function POST(request) {
    try {
      
       
    return NextResponse.json(
        { message: "Logout successful", success: true },
        { status: 200 }
      );
      } catch (err) {
        onsole.error("Logout error:", error);
         return NextResponse.json(
      { message: "Error in Logout", success: false, error: error.message },
      { status: 500 }
    );
      }
    }
  

