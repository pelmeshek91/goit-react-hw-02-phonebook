import s from './Phonebook.module.css';

export const PhoneBook = ({ contactsList, deleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contactsList.map(({ name, number, id }) => {
        return (
          <li className={s.contactsItem} key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
