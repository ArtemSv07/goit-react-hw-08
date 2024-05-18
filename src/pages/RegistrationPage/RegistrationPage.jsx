import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const RegistrationPage = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <>
      <div>
        <RegisterForm />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default RegistrationPage;
