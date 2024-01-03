import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
