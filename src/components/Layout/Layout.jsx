import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main className={css.main}>
        <Toaster position="top-center" />
        {children}
      </main>
    </div>
  );
};

export default Layout;
