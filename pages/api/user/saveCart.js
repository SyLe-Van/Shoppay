import { createRouter } from "next-connect";
import db from "../../../utils/db";
import Product from "../../../models/Products";
import User from "../../../models/User";
import Cart from "../../../models/Cart";
import auth from "../../../middleware/auth";

const router = createRouter().use(auth);

router.post(async (req, res) => {
  try {
    await db.dbConnect();
    let products = [];
    const { cart } = req.body;
    console.log("Dữ liệu từ request:", req.body);

    let user = await User.findById(req.user);
    console.log("Người dùng:", user);

    let existing_cart = await Cart.findOne({ user: user._id });

    if (existing_cart) {
      console.log("Giỏ hàng hiện tại:", existing_cart._id.toString());
      console.log("Đã tìm thấy giỏ hàng hiện tại. Đang xóa...");
      await Cart.findByIdAndDelete(existing_cart._id);
    } else {
      console.log("Không tìm thấy giỏ hàng hiện tại. Tạo mới...");
    }

    for (var i = 0; i < cart.length; i++) {
      let dbProduct = await Product.findById(cart[i]._id).lean();
      let subProduct = dbProduct.subProducts[cart[i].styles];
      let tempProduct = {};
      tempProduct.name = dbProduct.name;
      tempProduct.product = dbProduct._id;
      tempProduct.color = {
        color: cart[i].color.color,
        image: cart[i].color.image,
      };
      tempProduct.image = subProduct.images[0].url;
      tempProduct.qty = Number(cart[i].qty);
      tempProduct.size = cart[i].size;
      let price = Number(
        subProduct.sizes.find((p) => p.size == cart[i].size).price
      );
      tempProduct.price =
        subProduct.discount > 0
          ? (price - price / Number(subProduct.discount)).toFixed(2)
          : price.toFixed(2);

      products.push(tempProduct);
    }

    let cartTotal = 0;

    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].qty;
    }
    console.log("Tổng giá trị giỏ hàng:", cartTotal);

    await new Cart({
      products,
      cartTotal: cartTotal.toFixed(2),
      user: user._id,
    }).save();

    console.log("Lưu giỏ hàng thành công");
    await db.dbDisconnect();
    res.json({ message: "Lưu giỏ hàng thành công" });
  } catch (error) {
    console.error("Lỗi trong quá trình lưu giỏ hàng:", error);
    res.status(500).json({ message: error.message });
  }
});
export default router.handler();
