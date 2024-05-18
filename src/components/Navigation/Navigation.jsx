import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      <NavLink to="/" className={buildClass}>
        HomePage
      </NavLink>
      {loggedIn && (
        <NavLink to="/contacts" className={buildClass}>
          ContactsPage
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
