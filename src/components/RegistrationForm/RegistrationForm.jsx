import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { toast } from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value))
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
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formBox}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.errMessage} name="name" as="span" />
        </div>

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

        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
