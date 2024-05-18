import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const ContactsPage = () => {
  const { error, loading } = useSelector((state) => state.contacts);
  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && <Error error={error} />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
