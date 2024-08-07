import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import bcrypt from "bcrypt";
import { createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email is not registered" });
    }
    const userId = createResetToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${userId}`;
    sendEmail(email, url, "", "Activate your account");
    await db.dbDisconnect();
    res.status(200).json({
      message: "User registered successfully. Please activate your account",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
