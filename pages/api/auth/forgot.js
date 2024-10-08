import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import bcrypt from "bcrypt";
import { createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email is not registered" });
    }
    const user_id = createResetToken({
      id: user._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    sendEmail(email, url, "", "Reset your password", resetEmailTemplate);
    // await db.dbDisconnect();
    res.status(200).json({
      message:
        "An email has been sent to your email address, use the link to reset your password",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
