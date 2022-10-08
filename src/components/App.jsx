import { Component } from 'react';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <PhoneList />
        </Section>
      </>
    );
  }
}
