const {username , password} = process.env;
// MongoDB connection string
export const db =`mongodb+srv://${username}:${password}@cluster0.6obwzbq.mongodb.net/rig?retryWrites=true&w=majority&appName=Cluster0`; 