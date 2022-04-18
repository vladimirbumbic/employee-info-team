import styles from './TechnologyItem.module.css';
import { deleteTechnology } from '../../services/technologies';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const TechnologyItem = (props) => {
  const [editable, setEditable] = useState('false');
  const { technologies, setTechnologies } = useContext(AuthContext);
  const handleDeleteTechnology = () => {
    deleteTechnology(props.id);
    const newTechnologies = technologies.filter((technology) => {
      return technology.id !== props.id;
    });

    setTechnologies(newTechnologies);
    window.localStorage.setItem(
      'technologies',
      JSON.stringify(newTechnologies),
    );
  };
  const handleChangeEditable = () => {
    editable === 'true' ? setEditable('false') : setEditable('true');
  };
  return (
    <div className={styles.technologyItemContainer}>
      <div
        className={
          editable === 'true'
            ? styles.technologyNameActive
            : styles.technologyName
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

        <button
          className={styles.deleteButton}
          onClick={handleDeleteTechnology}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TechnologyItem;
