import mongoose from "mongoose";

function ConnectionObj() {
    return {
        isConnected:false 
    };
}
const connection = ConnectionObj();

async function dbconnect(){
    if(connection.isConnected){
        console.log("already connected");
        return

    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("Database connection Failed")

        process.exit(1)
        
    }
}

export default dbconnect;