import styles from './Technologies.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import TechnologyItem from '../TechnologyItem';
import { addTechnology } from '../../services/technologies';

const Technologies = () => {
  const { technologies, setTechnologies } = useContext(AuthContext);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await addTechnology(data.technology);
      setTechnologies([
        ...technologies,
        { id: response.data, name: data.technology },
      ]);
      window.localStorage.setItem(
        'technologies',
        JSON.stringify([
          ...technologies,
          { id: response.data, name: data.technology },
        ]),
      );
      console.log(response);
      console.log(technologies);
    } catch (error) {
      console.log(`Technology creation failed - ${error}`);
    }

    console.log(data);
  };
  return (
    <main className={styles.technologyMainContainer}>
      <h1 className={styles.manageTechnologiesTitle}>Manage Technologies</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelAndInputContainer}>
          <input
            placeholder="Enter new technology..."
            className={styles.technologyInput}
            {...register('technology')}
            type="text"
          />
          <button
            type="submit"
            className={
              watch('technology') === undefined || watch('technology') === ''
                ? styles.addButton
                : styles.addButtonActive
            }
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {technologies ? (
          technologies.map((technology, index) => (
            <TechnologyItem
              key={index}
              name={technology.name}
              id={technology.id}
            />
          ))
        ) : (
          <p>No technologies added.</p>
        )}
      </div>
    </main>
  );
};

export default Technologies;
