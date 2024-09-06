import { createRouter } from "next-connect";
import db from "../../../utils/db";
import auth from "../../../middleware/auth";
import admin from "../../../middleware/admin";
import Coupon from "../../../models/Coupon";
import slugify from "slugify";
import dbConnect from "../../../utils/db";
const router = createRouter().use(auth, admin);

router.post(async (req, res) => {
  try {
    const { coupon, discount, startDate, endDate } = req.body;
    await dbConnect();
    const test = await Coupon.findOne({ coupon });
    if (test) {
      return res
        .status(400)
        .json({ message: "Coupon already exist, Try a different coupon" });
    }
    await new Coupon({ coupon, discount, startDate, endDate }).save();

    //    db.disconnectDb();
    res.json({
      message: `Coupon ${coupon} has been created successfully.`,
      coupons: await Coupon.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete(async (req, res) => {
  try {
    const { id } = req.body;
    await dbConnect();
    await Coupon.deleteOne({ _id: id });
    // db.disconnectDb();
    return res.json({
      message: "Coupon has been deleted successfuly",
      coupons: await Coupon.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put(async (req, res) => {
  try {
    const { id, coupon, discount, startDate, endDate } = req.body;
    await dbConnect();
    await Coupon.findByIdAndUpdate(id, {
      coupon,
      discount,
      startDate,
      endDate,
    });
    // db.disconnectDb();
    return res.json({
      message: "Coupon has been updated successfuly",
      coupons: await Coupon.find({}).sort({ createdAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router.handler();
