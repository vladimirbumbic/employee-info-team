import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import styles from './CityItem.module.css';
import { useState } from 'react';
import { deleteCity } from '../../services/cities';

const CityItem = (props) => {
  const [editable, setEditable] = useState('false');
  const { cities, setCities } = useContext(AuthContext);
  const handleChangeEditable = () => {
    editable === 'true' ? setEditable('false') : setEditable('true');
  };

  const handleDeleteCity = () => {
    deleteCity(props.id);
    const newCities = cities.filter((city) => {
      return city.id !== props.id;
    });

    setCities(newCities);
    window.localStorage.setItem('cities', JSON.stringify(newCities));
  };

  return (
    <div className={styles.cityItemContainer}>
      <div
        className={
          editable === 'true' ? styles.cityNameActive : styles.cityName
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

        <button className={styles.deleteButton} onClick={handleDeleteCity}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CityItem;
