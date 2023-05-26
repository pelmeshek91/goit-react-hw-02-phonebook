import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = { ...this.state, id: nanoid() };
    this.props.addContact(newContact);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={s.caption}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p className={s.caption}>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
