import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const buildClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={buildClass}>
        RegistrationPage
      </NavLink>
      <NavLink to="/login" className={buildClass}>
        LoginPage
      </NavLink>
    </div>
  );
};

export default AuthNav;
