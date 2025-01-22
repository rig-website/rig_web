import dbconnect from "@/Libs/mongodb";
import { NextResponse } from "next/server";
import Member from "@/Libs/mongodb.js";

export async function POST(request){
    try {
        const { name, linkedin, presentation, position, year } = await request.json();
    
        if ( !name || !linkedin || !presentation || !position || !year) {
            return NextResponse.json(
              { message: "Please provide all details", success: false },
              { status: 400 }
            );
          }
    
    
          await dbconnect();
    
          const existingMember = await Member.findOne({year})
            if(existingMember){
                return NextResponse.json({
                    message:'Member Already exists',
                    success:false,
                   
        
                })
            }
    
            
            const newMember = new User({
                name, 
                linkedin, 
                presentation, 
                position, 
                year
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