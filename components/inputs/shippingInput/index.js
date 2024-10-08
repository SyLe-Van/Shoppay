import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { useField, ErrorMessage } from "formik";

export default function ShippingInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  const [move, setMove] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (field.value.length > 0) {
      setMove(true);
    } else {
      setMove(false);
    }
  }, [field.value]);
  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error && styles.error_shipping
      }`}
    >
      <div
        className={styles.input_wrapper}
        onFocus={() => setMove(true)}
        onBlur={() => setMove(field.value.length > 0 ? true : false)}
      >
        <input
          ref={inputRef}
          type={field.type}
          name={field.name}
          {...field}
          {...props}
        />
        <span
          className={move ? styles.move : ""}
          onClick={() => {
            inputRef.current.focus();
            setMove(true);
          }}
        >
          {placeholder}
        </span>
      </div>
      <p>{meta.touched && meta.error && <ErrorMessage name={field.name} />}</p>
    </div>
  );
}
