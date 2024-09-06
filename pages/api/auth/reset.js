import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import bcrypt from "bcrypt";
import { createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";
const router = createRouter();

router.put(async (req, res) => {
  try {
    await db.dbConnect();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "This account does not exist" });
    }

    await user.updateOne({ password: await bcrypt.hash(password, 12) });
    res.json({ email: user.email, message: "Password updated successfully" });
    // await db.dbDisconnect();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
