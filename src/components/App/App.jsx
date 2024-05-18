import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );

  // IsRefreshing ? (
  //   <Loader />
  // ) : (
  //   <Layout>
  //     <Suspense fallback={<div>loading...</div>}>
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route
  //           path="/register"
  //           element={
  //             <RestrictedRoute
  //               component={<RegistrationPage />}
  //               redirectTo="/"
  //             />
  //           }
  //         />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute
  //               component={<LoginPage />}
  //               redirectTo="/contacts"
  //             />
  //           }
  //         />
  //         <Route
  //           path="/contacts"
  //           element={
  //             <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
  //           }
  //         />
  //         <Route path="*" element={<NotFoundPage />} />
  //       </Routes>
  //     </Suspense>
  //   </Layout>
  // );
}

export default App;
