import Footer from "../../../components/footer";
import Header from "../../../components/header";
import styles from "../../../styles/forgot.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";
import LoginInput from "../../../components/inputs/loginInput";
import { Formik, Form } from "formik";
import Link from "next/link";
import axios from "axios";
import DotLoaderSpinner from "../../../components/loaders/dotLoader";
import CircledIconBtn from "../../../components/buttons/circledIconBtn";
import * as Yup from "yup";
export default function Forgot() {
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordValidation = Yup.object({
    password: Yup.string()
      .required(
        "Please enter your new password. It must be atleast 8 characters."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };
  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}
      <Header country="Viet Nam" />
      <div className={styles.forgot}>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <div className={styles.forgot_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Reset your password? <Link href="/">Login instead</Link>
            </span>
          </div>

          <Formik
            enableReinitialize
            initialValues={{ password, conf_password }}
            validationSchema={passwordValidation}
            onSubmit={() => {
              resetHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="password"
                  icon="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput
                  type="password"
                  icon="password"
                  name="conf_password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConf_password(e.target.value)}
                />
                <CircledIconBtn type="submit" text="Submit" />
                <div style={{ marginTop: "10px" }}>
                  {error && <span className={styles.error}>{error}</span>}
                  {success && <span className={styles.success}>{success}</span>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country="Viet Nam" />
    </>
  );
}
