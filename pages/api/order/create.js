import { createRouter } from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import auth from "../../../middleware/auth";
import Order from "../../../models/Order";
const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    db.dbConnect();
    const { products, shippingAddress, paymentMethod, total } = req.body;
    const user = await User.findById(req.user);
    const newOrder = await new Order({
      user: user._id,
      products,
      shippingAddress,
      paymentMethod,
      total,
    }).save();
    // db.dbDisconnect();
    return res.json({
      message: "Order created successfully !",
      order_id: newOrder._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
