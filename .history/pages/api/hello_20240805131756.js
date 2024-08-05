import db from "../../utils/db";

export default async function handler(req, res) {
  db.dbConnectdbConnect();
  db.dbDisconnect();
  res.status(200).json({ name: "John Doe" });
}
