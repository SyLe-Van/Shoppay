import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/forgot.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";
import LoginInput from "../../components/inputs/loginInput";
import { Formik, Form } from "formik";
import Link from "next/link";
import CircledIconBtn from "../../components/buttons/circledIconBtn";
import * as Yup from "yup";
export default function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const emailValidation = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
  });
  const forgotHandler = async () => {};
  return (
    <>
      <Header country="Viet Nam" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password? <Link href="/">Login instead</Link>
            </span>
          </div>

          <Formik
            enableReinitialize
            initialValues={{ email }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  icon="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <CircledIconBtn type="submit" text="Sign in" />
                {error && <span className={styles.error}>{error}</span>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country="Viet Nam" />
    </>
  );
}
