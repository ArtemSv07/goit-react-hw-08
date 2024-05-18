import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Error from "../../components/Error/Error";

const ContactsPage = () => {
  const { error } = useSelector((state) => state.contacts);
  return (
    <>
      <ContactForm />
      <SearchBox />
      {error && <Error error={error} />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
