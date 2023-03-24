import React from 'react';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ContactListItem } from './ContactListItem ';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  return (
    <List>
      {filteredItems.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
