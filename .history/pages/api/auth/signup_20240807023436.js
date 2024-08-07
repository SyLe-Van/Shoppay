// import nc from "next-connect";

// const handler = nc();

// handler.post(async (req, res) => {
//   res.send("Hello World");
// });

// export default handler;

import { createRouter } from "next-connect";
import db from "../../../utils/db";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
