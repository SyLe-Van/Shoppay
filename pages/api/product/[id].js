import { createRouter } from "next-connect";
import db from "../../../utils/db";
import Product from "../../../models/Products";
const router = createRouter();

router.get(async (req, res) => {
  try {
    db.dbConnect();
    const id = req.query.id;
    const style = req.query.style;
    const size = req.query.size;
    const product = await Product.findById(id).lean();
    let discount = product.subProducts[style].discount;
    let priceBefore = product.subProducts[style].sizes[size].price;
    let price = discount ? priceBefore - priceBefore / discount : priceBefore;
    // db.dbDisconnect();
    return res.json({
      _id: product._id,
      styles: Number(style),
      name: product.name,
      description: product.description,
      slug: product.slug,
      sku: product.subProducts[style].sku,
      brand: product.brand,
      shipping: product.shipping,
      images: product.subProducts[style].images,
      color: product.subProducts[style].color,
      size: product.subProducts[style].sizes[size].size,
      price,
      priceBefore,
      quantity: product.subProducts[style].sizes[size].qty,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router.handler();
