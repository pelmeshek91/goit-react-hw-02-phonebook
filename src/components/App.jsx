import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './Phonebook/PhoneBook';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContactName = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  filterContacts = e => {
    const { value } = e.target;
    this.setState(() => ({ filter: value }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form addContactName={this.addContactName} />
        <h2>Contacts</h2>
        <Filter
          filterContacts={this.filterContacts}
          filter={this.state.filter}
        />
        <PhoneBook contactsList={this.state.contacts} />
      </div>
    );
  }
}
