import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import Project from "@/Models/projectModel.js"


export async function POST(request){
    try {
        const { title, description } = await request.json();
    
        if (!title || !description) {
            return NextResponse.json(
              { message: "Please provide both Title and Description for the Project", success: false },
              { status: 400 }
            );
          }
    
    
          await dbconnect();
    
          const existingProject = await Project.findOne({title})
            if(existingProject){
                return NextResponse.json({
                    message:'You have already added the Project with this name',
                    success:false,
                   
        
                })
            }
    
            
            const newProject = new Project({
          title,
          description,
        });
    
        const savedProject = await newProject.save();
    
        return NextResponse.json(
          {
            message: "Project added successfully",
            success: true,
            data: savedProject,
          },
          { status: 201 } 
        );
    } catch (error) {
        console.error("Error in Adding the Project", error);
    
        return NextResponse.json(
          {
            message: "Error in Adding the Project",
            success: false,
            error: error.message,
          },
          { status: 500 } 
        );
      }
    }