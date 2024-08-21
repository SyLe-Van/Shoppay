import styles from "./styles.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import Rating from "@mui/material/Rating";
export default function Review({ review }) {
  const { name, image } = review.reviewBy;
  return (
    <div className={styles.review}>
      <div className={styles.flex}>
        <div className={styles.review_user}>
          <h4>
            {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
          </h4>
          <img src={image} alt="" />
        </div>
        <div className={styles.review_review}>
          <Rating
            name="half-rating-read"
            value={review.rating}
            precision={0.5}
            readOnly
            style={{ color: "#facf19" }}
          />
          <Rating
            name="half-rating-read"
            value={review.rating}
            precision={0.5}
            readOnly
            style={{ color: "#facf19" }}
          />
          <p>{review.review}</p>
          <p>
            <span>Overall Fit:</span>
            {review.fit}
            &nbsp;&nbsp;
            <span>Size:</span>
            {review.size}
            &nbsp;&nbsp;
            <div className={styles.flex}>
              <img
                src={review.style.image}
                alt=""
                className={styles.review_img}
              />
            </div>
          </p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.review_images}>
          {review.images.length > 0 &&
            review.images.map((img, i) => (
              <img key={i} src={img?.url} alt="" />
            ))}
        </div>
        <div className={styles.review_extra}>
          <div className={styles.review_extra_likes}>
            {review.likes && review.likes?.likes}
            <AiOutlineLike />
          </div>
          <div className={styles.review_extra_date}>
            {review?.updatedAt?.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
}
