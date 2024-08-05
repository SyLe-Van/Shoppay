import mongoose from "mongoose";
const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already connected to the database.");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection.");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("New connection to the database.");
  connection.isConnected = db.connections[0].readyState;
}

async function dbDisconnect() {
  if (connection.isConnected) {
    if (mongoose.connections[0].readyState) {
      await mongoose.disconnect();
      console.log("Disconnecting from the database.");
      connection.isConnected = false;
    }
  }
}

const db = { dbConnect, dbDisconnect };
export default db;
