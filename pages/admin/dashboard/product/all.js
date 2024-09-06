import styles from "../../../../styles/products.module.scss";
import Layout from "../../../../components/admin/layout";
import db from "../../../../utils/db";
import Product from "../../../../models/Products";
import Category from "../../../../models/Category";
import ProductCard from "../../../../components/admin/product/productCard";
import dbConnect from "../../../../utils/db";
export default function all({ products }) {
  console.log(products);
  return (
    <Layout>
      <div className={styles.header}>All Products</div>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  await dbConnect();
  const products = await Product.find({})
    .populate({ path: "category", model: Category })
    .sort({ createdAt: -1 })
    .lean();
  //   await db.disconnectDb();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
