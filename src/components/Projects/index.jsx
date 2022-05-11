import styles from './Projects.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { addProject } from '../../services/projects';
import ProjectItem from '../Project item';

const Projects = () => {
  const { projects, setProjects, projectManagers } = useContext(AuthContext);

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const response = await addProject(data.project, data.projectManager);
      setProjects([...projects, { id: response.data, name: data.project }]);
      window.localStorage.setItem(
        'projects',
        JSON.stringify([
          ...projects,
          { id: response.data, name: data.project },
        ]),
      );
    } catch (error) {
      console.log(`Project creation failed - ${error}`);
    }
    e.target.reset();
  };

  return (
    <main className={styles.projectMainContainer}>
      <h1 className={styles.manageProjectsTitle}>Manage Projects</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelAndInputContainer}>
          <input
            placeholder="Enter new project..."
            className={styles.projectInput}
            {...register('project')}
            type="text"
          />
          <select
            className={styles.selectProjectManager}
            {...register('projectManager')}
          >
            {projectManagers.map((pm) => (
              <option key={pm.id} value={pm.id}>
                {pm.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={
              watch('projectManager') === undefined || watch('project') === ''
                ? styles.addButton
                : styles.addButtonActive
            }
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {projects ? (
          projects.map((project, index) => (
            <ProjectItem key={index} name={project.name} id={project.id} />
          ))
        ) : (
          <p>No projects added.</p>
        )}
      </div>
    </main>
  );
};

export default Projects;
