export const Filter = ({ filter, filterContacts }) => {
  return (
    <div>
      <label>
        <p>Find contact by name</p>
        <input type="text" value={filter} onChange={filterContacts} />
      </label>
    </div>
  );
};
