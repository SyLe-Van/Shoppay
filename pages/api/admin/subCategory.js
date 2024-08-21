import { createRouter } from "next-connect";
import db from "../../../utils/db";
import auth from "../../../middleware/auth";
import admin from "../../../middleware/admin";
import SubCategory from "../../../models/SubCategory";
import slugify from "slugify";
const router = createRouter().use(auth, admin);

router.post(async (req, res) => {
  try {
    const { name, parent } = req.body;
    db.dbConnect();
    const test = await SubCategory.findOne({ name });
    if (test) {
      return res
        .status(400)
        .json({ message: "SubCategory already exist, Try a different name" });
    }
    await new SubCategory({ name, parent, slug: slugify(name) }).save();

    // db.disconnectDb();
    res.json({
      message: `SubCategory ${name} has been created successfully.`,
      subCategories: await SubCategory.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    db.dbDisconnect();
    res.status(500).json({ message: error.message });
  }
});
router.delete(async (req, res) => {
  try {
    const { id } = req.body;
    db.dbConnect();
    await SubCategory.deleteOne({ _id: id });
    // db.disconnectDb();
    return res.json({
      message: "SubCategory has been deleted successfuly",
      subCategories: await SubCategory.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put(async (req, res) => {
  try {
    const { id, name, parent } = req.body;
    db.dbConnect();
    await SubCategory.findByIdAndUpdate(id, {
      name,
      parent,
      slug: slugify(name),
    });
    // db.disconnectDb();
    return res.json({
      message: "SubCategory has been updated successfuly",
      subCategories: await SubCategory.find({}).sort({ createdAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get(async (req, res) => {
  try {
    const { category } = req.query;
    console.log(category);
    if (!category) {
      return res.json([]);
    }
    db.dbConnect();
    const results = await SubCategory.find({ parent: category }).select("name");
    console.log(results);
    // db.dbDisconnect();
    return res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router.handler();
