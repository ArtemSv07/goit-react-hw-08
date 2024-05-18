import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo }) => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return isLogIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
