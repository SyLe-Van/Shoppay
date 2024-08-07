import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
