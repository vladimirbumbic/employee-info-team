import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import styles from './Countries.module.css';
import { useForm } from 'react-hook-form';
import CountryItem from '../CountryItem';
import { addCountry } from '../../services/countries';

const Countries = () => {
  const { countries } = useContext(AuthContext);
  // const tempCountries = [
  //   {
  //     name: 'Serbia',
  //   },
  //   {
  //     name: 'Montenegro',
  //   },
  //   {
  //     name: 'Greece',
  //   },
  //   {
  //     name: 'Hungary',
  //   },
  // ];
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    console.log(data.country);
    const response = await addCountry(data.country);
    console.log(response);
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
        {window.localStorage.getItem('countries') ? (
          JSON.parse(window.localStorage.getItem('countries')).map(
            (country) => <CountryItem key={country.id} name={country.name} />,
          )
        ) : (
          <p>No countries added.</p>
        )}
      </div>
    </main>
  );
};

export default Countries;
