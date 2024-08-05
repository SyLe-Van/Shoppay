import db from "../../utils/db";

export default async function handler(req, res) {
  dbConnect();
  dbDisconnect();
  res.status(200).json({ name: "John Doe" });
}
