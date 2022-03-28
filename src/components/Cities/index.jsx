import styles from './Cities.module.css';
import { useForm } from 'react-hook-form';
import CityItem from '../CityItem';
const Cities = () => {
  const tempCities = [
    {
      name: 'Beograd',
    },
    {
      name: 'Nis',
    },
    {
      name: 'Novi Sad',
    },
    {
      name: 'Kraljevo',
    },
  ];
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className={styles.cityMainContainer}>
      <h1 className={styles.manageCitiesTitle}>Manage Cities</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelAndInputContainer}>
          <input
            placeholder="Enter new country..."
            className={styles.cityInput}
            {...register('city')}
            type="text"
          />
          <button
            type="submit"
            className={
              watch('country') === undefined || watch('city') === ''
                ? styles.addButton
                : styles.addButtonActive
            }
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {tempCities.map((country, index) => (
          <CityItem key={index} name={country.name} />
        ))}
      </div>
    </main>
  );
};

export default Cities;
