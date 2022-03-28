import styles from './CityItem.module.css';
import { useState } from 'react';

const CityItem = (props) => {
  const [editable, setEditable] = useState('false');
  const handleChangeEditable = () => {
    editable === 'true' ? setEditable('false') : setEditable('true');
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

        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default CityItem;
