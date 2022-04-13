import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import styles from './Countries.module.css';
import { useForm } from 'react-hook-form';
import CountryItem from '../CountryItem';
import { addCountry } from '../../services/countries';

const Countries = () => {
  const { countries, setCountries } = useContext(AuthContext);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await addCountry(data.country);
      setCountries([...countries, { id: response.data, name: data.country }]);
      window.localStorage.setItem(
        'countries',
        JSON.stringify([
          ...countries,
          { id: response.data, name: data.country },
        ]),
      );
      console.log(response);
      console.log(countries);
    } catch (error) {
      console.log(`Country creation failed - ${error}`);
    }
  };
  return (
    <main className={styles.countryMainContainer}>
      <h1 className={styles.manageCountriesTitle}>Manage Countries</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelAndInputContainer}>
          <input
            placeholder="Enter new country..."
            className={styles.countryInput}
            {...register('country')}
            type="text"
          />
          <button
            type="submit"
            className={
              watch('country') === undefined || watch('country') === ''
                ? styles.addButton
                : styles.addButtonActive
            }
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {countries ? (
          countries.map((country, index) => (
            <CountryItem key={index} name={country.name} id={country.id} />
          ))
        ) : (
          <p>No countries added.</p>
        )}
      </div>
    </main>
  );
};

export default Countries;
