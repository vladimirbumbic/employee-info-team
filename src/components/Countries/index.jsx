import styles from './Countries.module.css';
import { useForm } from 'react-hook-form';
import CountryItem from '../CountryItem';

const Countries = () => {
    const tempCountries = [
        {
            name: 'Serbia',
        },
        {
            name: 'Montenegro',
        },
        {
            name: 'Greece',
        },
        {
            name: 'Hungary',
        },
    ];
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data);
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
                            watch('country') === undefined ||
                            watch('country') === ''
                                ? styles.addButton
                                : styles.addButtonActive
                        }
                    >
                        Add
                    </button>
                </div>
            </form>
            <div>
                {tempCountries.map((country, index) => (
                    <CountryItem key={index} name={country.name} />
                ))}
            </div>
        </main>
    );
};

export default Countries;
