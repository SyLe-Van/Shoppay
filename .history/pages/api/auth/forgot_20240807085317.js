import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import bcrypt from "bcrypt";
import { createActivationToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    const { email } = req.body;
    res.send(email);
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
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
