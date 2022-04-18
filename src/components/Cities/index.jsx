import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import styles from './Cities.module.css';
import { useForm } from 'react-hook-form';
import CityItem from '../CityItem';
import { addCity } from '../../services/cities';

const Cities = () => {
  const { countries, cities, setCities } = useContext(AuthContext);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      // console.log(data.country);
      const cityResponse = await addCity(data.city, data.country);
      setCities([...cities, { id: cityResponse.data, name: data.city }]);
      window.localStorage.setItem(
        'cities',
        JSON.stringify([...cities, { id: cityResponse.data, name: data.city }]),
      );
      // console.log(cityResponse);
    } catch (error) {
      console.log(`Adding city failed - ${error}`);
    }
  };
  return (
    <main className={styles.cityMainContainer}>
      <h1 className={styles.manageCitiesTitle}>Manage Cities</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelAndInputContainer}>
          <input
            placeholder="Enter new city..."
            className={styles.cityInput}
            {...register('city')}
            type="text"
          />
          <select className={styles.selectCountry} {...register('country')}>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
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
        {cities.map((city, index) => (
          <CityItem key={index} name={city.name} id={city.id} />
        ))}
      </div>
    </main>
  );
};

export default Cities;
