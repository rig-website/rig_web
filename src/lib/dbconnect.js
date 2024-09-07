// Load environment variables and encode them
const username = encodeURIComponent(process.env.username);
const password = encodeURIComponent(process.env.password);

// Check that the environment variables are correctly loaded
console.log('Username:', process.env.username, 'Password:', process.env.password);

// MongoDB connection string
export const db = `mongodb+srv://${username}:${password}@cluster0.6obwzbq.mongodb.net/rig?retryWrites=true&w=majority&appName=Cluster0`;