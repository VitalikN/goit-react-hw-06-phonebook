import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';

import { Filter } from './Filter/filter';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
