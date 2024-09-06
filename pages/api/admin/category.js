import { createRouter } from "next-connect";
import db from "../../../utils/db";
import Coupon from "../../../models/Coupon";
import auth from "../../../middleware/auth";
import admin from "../../../middleware/admin";
import Category from "../../../models/Category";
import slugify from "slugify";
import dbConnect from "../../../utils/db";
const router = createRouter().use(auth, admin);

router.post(async (req, res) => {
  try {
    const { name } = req.body;
    await dbConnect();
    const test = await Category.findOne({ name });
    if (test) {
      return res
        .status(400)
        .json({ message: "Category already exist, Try a different name" });
    }
    await new Category({ name, slug: slugify(name) }).save();

    // db.dbDisconnect();
    res.json({
      message: `Category ${name} has been created successfully.`,
      categories: await Category.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete(async (req, res) => {
  try {
    const { id } = req.body;
    await dbConnect();
    await Category.deleteOne({ _id: id });
    // db.dbDisconnect();
    return res.json({
      message: "Category has been deleted successfuly",
      categories: await Category.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put(async (req, res) => {
  try {
    const { id, name } = req.body;
    await dbConnect();
    await Category.findByIdAndUpdate(id, { name });
    // db.dbDisconnect();
    return res.json({
      message: "Category has been updated successfuly",
      categories: await Category.find({}).sort({ createdAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router.handler();
