import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import css from "./LoginForm.module.css";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(login(value))
      .unwrap()
      .then(() => {
        toast.success("Success!");
      })
      .catch((error) => {
        toast.error(error);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formBox}>
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.errMessage} name="email" as="span" />
        </div>

        <div className={css.formBox}>
          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={css.input}
            type="text"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage className={css.errMessage} name="password" as="span" />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
