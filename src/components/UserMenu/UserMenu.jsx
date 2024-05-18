import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.container}>
      <p>Welcome: {userData.name}</p>
      <button onClick={handlelogout}>logout</button>
    </div>
  );
};

export default UserMenu;
