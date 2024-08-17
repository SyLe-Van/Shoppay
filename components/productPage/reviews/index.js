import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
// import { Rate } from "antd";
import AddReview from "./AddReview";
import Select from "./Select";
import styles from "./styles.module.scss";
import Table from "./Table";

export default function Reviews({ product }) {
  const { data: session } = useSession();
  //   const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState(product.reviews);
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <h1>Customer Reviews ({product.reviews.length})</h1>
        <div className={styles.reviews_stats}>
          <div className={styles.reviews_stats_overview}>
            <span>Average Rating</span>
            <div className={styles.reviews_stats_overview_rating}>
              {/* <Rate
                allowHalf
                disabled
                style={{ color: "#FACF19" }}
                defaultValue={product.rating}
              /> */}
              {product.rating == 0 ? "No review yet." : product.rating}
            </div>
          </div>
          <div className={styles.reviews_stats_reviews}>
            {product.ratings.map((rating, i) => (
              <div key={i} className={styles.reviews_stats_reviews_review}>
                {/* <Rate
                  allowHalf
                  disabled
                  style={{ color: "#FACF19" }}
                  defaultValue={5 - i}
                /> */}
                <div className={styles.bar}>
                  <div
                    className={styles.bar_inner}
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        {session ? (
          <AddReview product={product} setReviews={setReviews} />
        ) : (
          <button onClick={() => signIn()} className={styles.login_btn}>
            Login to add review
          </button>
        )}
        <Table
          reviews={reviews}
          allSizes={product.allSizes}
          colors={product.colors}
        />
      </div>
    </div>
  );
}
