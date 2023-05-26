export const PhoneBook = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
