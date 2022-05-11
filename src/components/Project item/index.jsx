import styles from './ProjectItem.module.css';
import { deleteProject } from '../../services/projects';
import { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const ProjectItem = (props) => {
  const [editable, setEditable] = useState('false');
  const { projects, setProjects } = useContext(AuthContext);

  const handleDeleteProject = () => {
    deleteProject(props.id);
    const newProjects = projects.filter((project) => {
      return project.id !== props.id;
    });

    setProjects(newProjects);
    window.localStorage.setItem('projects', JSON.stringify(newProjects));
  };

  const handleChangeEditable = () => {
    editable === 'true' ? setEditable('false') : setEditable('true');
  };

  return (
    <div className={styles.projectItemContainer}>
      <div
        className={
          editable === 'true' ? styles.projectNameActive : styles.projectName
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

        <button className={styles.deleteButton} onClick={handleDeleteProject}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
