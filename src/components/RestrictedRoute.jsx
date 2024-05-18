import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo }) => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return isLogIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
