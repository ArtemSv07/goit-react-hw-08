import css from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <h2 className={css.text}>Oops something went wrong: {error}, try again!</h2>
  );
};
export default Error;
