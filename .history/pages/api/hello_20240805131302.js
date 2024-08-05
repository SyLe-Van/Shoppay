import { dbConnect } from "../../utils/db";

export default async function handler(req, res) {
  dbConnect();
  res.status(200).json({ name: "John Doe" });
}
