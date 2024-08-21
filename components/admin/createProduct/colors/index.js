import { ErrorMessage, useField } from "formik";
import { useState } from "react";
import styles from "./styles.module.scss";
import { ColorExtractor } from "react-color-extractor";
import { TbArrowUpRightCircle } from "react-icons/tb";
export default function Colors({
  product,
  setProduct,
  name,
  colorImage,
  ...props
}) {
  const [toggle, setToggle] = useState(false);
  const [colors, setColors] = useState([]);
  // Pass only the name to useField
  const [field, meta] = useField(name);

  const renderSwatches = () => {
    return colors.map((color, id) => (
      <div
        className={styles.square_color}
        key={id}
        style={{ backgroundColor: color }}
        onClick={() => {
          setProduct({
            ...product,
            color: { color, image: product.color.image },
          });
        }}
      >
        {color}
      </div>
    ));
  };

  return (
    <div className={styles.colors}>
      <div
        className={`${styles.header} ${
          meta.error && meta.error[name] ? styles.header_error : ""
        }`}
      >
        <div className={styles.flex}>
          {meta.error && meta.error[name] && (
            <img src="../../../images/warning.png" alt="" />
          )}
          Pick a product color
        </div>
        <span>
          {meta.touched && meta.error && meta.error[name] && (
            <div className={styles.error_msg}>
              <span></span>
              <ErrorMessage name={name} />
            </div>
          )}
        </span>
      </div>
      <input
        type="text"
        value={product.color.color}
        name={name}
        hidden
        {...field}
        {...props}
      />
      <div className={styles.colors_infos}></div>
      <div className={toggle ? styles.toggle : ""}>
        <ColorExtractor getColors={(colors) => setColors(colors)}>
          <img src={colorImage} style={{ display: "none" }} />
        </ColorExtractor>
        <div className={styles.wheel}>{renderSwatches()}</div>
      </div>
      {colors.length > 0 && (
        <TbArrowUpRightCircle
          className={styles.toggle_btn}
          onClick={() => setToggle((prev) => !prev)}
          style={{ transform: `${toggle ? "rotate(180deg)" : ""}` }}
        />
      )}
    </div>
  );
}
