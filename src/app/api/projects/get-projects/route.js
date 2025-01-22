import dbconnect from "@/Libs/mongodb.js"
import { NextResponse } from "next/server";
import Project from "@/Models/projectModel";



export async function GET(request) {
  
    try {
      await dbconnect();
  
      const projects = await Project.find({});
      if (!projects || projects.length === 0) {
        return NextResponse.json(
          { success: false, message: "No projects found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { success: true, projects },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching Projects:", error);
      return NextResponse.json(
        { message: "Internal Server Error", error: error.message },
        { status: 500 }
      );
    }
  }