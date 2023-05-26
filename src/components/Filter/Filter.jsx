import s from './Filter.module.css';

export const Filter = ({ filter, filterContacts }) => {
  return (
    <div className={s.filterWrap}>
      <label>
        <p className={s.filterTitle}>Find contact by name</p>
        <input type="text" value={filter} onChange={filterContacts} />
      </label>
    </div>
  );
};
