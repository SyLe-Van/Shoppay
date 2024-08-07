import styles from "./styles.module.scss";
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import { ErrorMessage, useField } from "formik";
import { useState } from "react";

export default function LoginInput({ icon, placeholder, ...props }) {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    if (icon === "password") {
      setIsPasswordFieldFocused(true);
    }
  };

  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ""
      }`}
    >
      {icon === "user" ? (
        <BiUser />
      ) : icon === "email" ? (
        <SiMinutemailer />
      ) : icon === "password" ? (
        <>
          <IoKeyOutline />
          {isPasswordFieldFocused && (
            <span
              className={styles.password_toggle}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          )}
        </>
      ) : (
        ""
      )}
      <input
        {...field}
        {...props}
        type={
          icon === "password"
            ? showPassword
              ? "text"
              : "password"
            : props.type
        }
        placeholder={placeholder}
        onFocus={handleFocus}
      />
      {meta.touched && meta.error && (
        <div className={styles.error_popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
