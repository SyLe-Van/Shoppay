import { createRouter } from "next-connect";
import User from "../../../models/User";
import auth from "../../../middleware/auth";
import Order from "../../../models/Order";
import dbConnect from "../../../utils/db";
const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    await dbConnect();
    const { products, shippingAddress, paymentMethod, total } = req.body;
    const user = await User.findById(req.user);
    const newOrder = await new Order({
      user: user._id,
      products,
      shippingAddress,
      paymentMethod,
      total,
    }).save();

    return res.json({
      message: "Order created successfully !",
      order_id: newOrder._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
