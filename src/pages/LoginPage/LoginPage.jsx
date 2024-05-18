import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const LoginPage = () => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <>
      <div className={css.container}>
        <LoginForm />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default LoginPage;
