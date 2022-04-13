import styles from './CountryItem.module.css';
import { deleteCountry } from '../../services/countries';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const CountryItem = (props) => {
  const [editable, setEditable] = useState('false');
  const { countries, setCountries } = useContext(AuthContext);
  const handleDeleteCountry = () => {
    deleteCountry(props.id);
    const newCountries = countries.filter((country) => {
      return country.id !== props.id;
    });

    setCountries(newCountries);
    window.localStorage.setItem('countries', JSON.stringify(newCountries));
  };
  const handleChangeEditable = () => {
    editable === 'true' ? setEditable('false') : setEditable('true');
  };
  return (
    <div className={styles.countryItemContainer}>
      <div
        className={
          editable === 'true' ? styles.countryNameActive : styles.countryName
        }
        contentEditable={editable}
        suppressContentEditableWarning={true}
      >
        {props.name}
      </div>
      <div>
        {editable === 'true' ? (
          <button className={styles.saveButton} onClick={handleChangeEditable}>
            Save
          </button>
        ) : (
          <button className={styles.editButton} onClick={handleChangeEditable}>
            Edit
          </button>
        )}

        <button className={styles.deleteButton} onClick={handleDeleteCountry}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CountryItem;
