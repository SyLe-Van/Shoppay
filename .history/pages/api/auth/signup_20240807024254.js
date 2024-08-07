import { createRouter } from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    return res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
