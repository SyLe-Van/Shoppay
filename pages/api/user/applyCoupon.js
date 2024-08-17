import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import auth from "../../../middleware/auth";
import Coupon from "../../../models/Coupon";
import Cart from "../../../models/Cart";
const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    db.dbConnect();
    const { coupon } = req.body;
    const user = User.findById(req.user);
    const checkCoupon = await Coupon.findOne({ coupon });
    if (checkCoupon == null) {
      return res.json({ message: "Invalid coupon" });
    }
    const { cartTotal } = await Cart.findOne({ user: req.user });
    let totalAfterDiscount =
      cartTotal - (cartTotal * checkCoupon.discount) / 100;

    await Cart.findOneAndUpdate({ user: user._id }, { totalAfterDiscount });

    res.json({
      totalAfterDiscount: totalAfterDiscount.toFixed(2),
      discount: checkCoupon.discount,
    });

    db.dbDisconnect();
    return res.json({ message: "Coupon applied successfully !" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
