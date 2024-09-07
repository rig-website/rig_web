
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { db } from "@/lib/dbconnect";
// Asynchronous GET handler
export async function GET() {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(db);
        
        // Respond with success message
        return NextResponse.json({ message: "Connected to DB" });
    } catch (error) {
        // Log any errors to the console
        console.error(error);
        
        // Respond with error message
        return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
}
