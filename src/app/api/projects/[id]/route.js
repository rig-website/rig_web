import dbconnect from "@/Libs/mongodb.js";
import { NextResponse } from "next/server";
import Project from "@/Models/projectModel.js";

export async function PUT(request, { params }) {
    const { id } = params;
    
    try {
      const { newTitle, newDescription } = await request.json();
      await dbconnect();
  
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        { 
          title: newTitle,      
          description: newDescription 
        },
        { new: true }
      );
  
      if (!updatedProject) {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Project Updated", project: updatedProject },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating Project:", error);
      return NextResponse.json(
        { message: "Internal Server Error", error: error.message },
        { status: 500 }
      );
    }
  }

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await dbconnect();

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Project:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
    const { id } = params;
  
    try {
      await dbconnect();
      
      const project = await Project.findByIdAndDelete(id);
      
      if (!project) {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Project Deleted" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting Project:", error);
      return NextResponse.json(
        { message: "Internal Server Error", error: error.message },
        { status: 500 }
      );
    }
  }