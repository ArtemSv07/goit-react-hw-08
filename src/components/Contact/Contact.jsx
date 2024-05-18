import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact, patchContact } from "../../redux/contacts/operations";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleDelete = () => dispatch(deleteContact(id));

  const handleSubmit = (value, actions) => {
    dispatch(patchContact({ id: id, change: value }));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.nameDiv}>
        <ul>
          <li>
            <p>
              <IoPerson className={css.phoneIcon} />
              {name}
            </p>
          </li>
          <li>
            <p className={css.contText}>
              <FaPhone className={css.phoneIcon} />
              {number}
            </p>
          </li>
        </ul>

        <button className={css.buttonDelete} onClick={handleDelete}>
          <span className={css.text}>Delete</span>
          <span className={css.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      </div>

      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.contactBox}>
            {" "}
            <div className={css.formBox}>
              <label className={css.label} htmlFor={nameFieldId}>
                Name-change
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
              <label className={css.label} htmlFor={numberFieldId}>
                Number-change
              </label>
              <Field
                className={css.input}
                type="text"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage
                className={css.errMessage}
                name="number"
                as="span"
              />
            </div>
          </div>

          <button className={css.btn} type="submit">
            Change-Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
