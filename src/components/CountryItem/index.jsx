import styles from './CountryItem.module.css';
import { useState } from 'react';

const CountryItem = (props) => {
    const [editable, setEditable] = useState('false');
    const handleChangeEditable = () => {
        editable === 'true' ? setEditable('false') : setEditable('true');
    };
    return (
        <div className={styles.countryItemContainer}>
            <div
                className={
                    editable === 'true'
                        ? styles.countryNameActive
                        : styles.countryName
                }
                contentEditable={editable}
                suppressContentEditableWarning={true}
            >
                {props.name}
            </div>
            <div>
                {editable === 'true' ? (
                    <button
                        className={styles.saveButton}
                        onClick={handleChangeEditable}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className={styles.editButton}
                        onClick={handleChangeEditable}
                    >
                        Edit
                    </button>
                )}

                <button className={styles.deleteButton}>Delete</button>
            </div>
        </div>
    );
};

export default CountryItem;
