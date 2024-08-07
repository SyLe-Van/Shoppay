import nc from "next-connect";
import db from "../../../utils/db";
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.dbConnect();
    console.log(req.body);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default handler;
