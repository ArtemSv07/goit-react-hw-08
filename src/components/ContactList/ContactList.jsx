import { useSelector, useDispatch } from "react-redux";

import { selectFiltered } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltered);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.listBox}>
      {filteredContacts.map((element) => (
        <li className={css.list} key={element.id}>
          <Contact data={element} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
