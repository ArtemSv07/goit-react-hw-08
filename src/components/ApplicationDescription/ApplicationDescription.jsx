import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import css from "./ApplicationDescription.module.css";

const ApplicationDescription = () => {
  const isLogIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1 className={css.title}>Contact Book Application</h1>
      {!isLogIn ? (
        <div className={css.container}>
          <ul>
            <li>
              {" "}
              <h3>
                A convenient and functional application that allows users to
                save, update, and delete contacts on a private page. Designed
                for those who value organization and simplicity in storing
                contact information, this app provides secure and intuitive
                management of your contacts.
              </h3>
            </li>
            <li>
              <h3>
                To start using the application, simply follow the{" "}
                {<Link to="/register">link</Link>} and register. After
                registration, you will be able to use all the features of the
                app, enjoying a simple and efficient interface.
              </h3>
            </li>
          </ul>

          <h2>Join us and make managing your contacts easy and convenient!</h2>
        </div>
      ) : (
        <div className={css.container}>
          <h2>Main Features:</h2>
          <ul>
            <li>
              <h3>
                Saving contacts: Add new contacts by specifying the name and
                phone number.
              </h3>
            </li>
            <li>
              <h3>
                Updating contacts: Easily edit and update contact information to
                always have up-to-date data.
              </h3>
            </li>
            <li>
              <h3>
                Deleting contacts: Quickly and effortlessly delete unnecessary
                contacts from your list.
              </h3>
            </li>
          </ul>
          <div className={css.divLink}>
            {" "}
            <Link to="/contacts" className={css.link}>
              <button className={css.cta}>
                <span className={css.hoverUnderlineAnimation}>
                  Go to contacts{" "}
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationDescription;
