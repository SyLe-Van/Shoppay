import mongoose from "mongoose";
const connection = {};

export async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already connected to the database.");
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  connection.isConnected = db.connections[0].readyState;
}
