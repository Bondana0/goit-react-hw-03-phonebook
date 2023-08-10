import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { ContactsForm } from './ContactItem/ContactItem';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export { ContactList } from './ContactList/ContactList';

const KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddPhoneBook = contact => {
    const namePhone = this.state.contacts.find(
      ({ name }) => contact.name === name
    );
    if (namePhone) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const contactList = {
      ...contact,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [contactList, ...prevState.contacts],
      };
    });
  };

  onRemoveContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterPhone = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  componentDidMount() {
    const contactsLocal = localStorage.getItem(KEY);
    this.setState({ contacts: JSON.parse(contactsLocal) ?? [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAddPhoneBook={this.onAddPhoneBook} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterPhone} />
        <ContactList
          filteredContacts={filteredContacts}
          onClick={this.onRemoveContact}
        />
      </>
    );
  }
}
