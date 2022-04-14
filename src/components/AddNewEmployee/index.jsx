import styles from './AddNewEmployee.module.css';
import { useForm } from 'react-hook-form';
import AvatarLogo from '../../assets/avatarIcon.png';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { addEmployee, getAllEmployees } from '../../services/employees';

const AddNewEmployee = () => {
  const { countries, cities } = useContext(AuthContext);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    const allEmployees = await getAllEmployees();
    console.log(allEmployees);
    const employeeResponse = await addEmployee(
      data.mail,
      data.name,
      data.seniority,
      data.city,
    );
    console.log(employeeResponse);
  };
  //   const data = JSON.parse(localStorage.getItem('loginData'));
  //   const profilePhoto = data.photo;
  return (
    <main className={styles.addEmployeeMainContainer}>
      <div className={styles.photoContainer}>
        <img className={styles.profilePhoto} src={AvatarLogo} alt="Profile" />
        <div className={styles.labelInputContainer}>
          <label>Add profile photo</label>
          <input className={styles.customFileInput} type="file" />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.formItems} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Name:</label>
            <input
              type="text"
              className={styles.inputField}
              {...register('name', { required: true })}
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Mail:</label>
            <input
              type="email"
              className={styles.inputField}
              {...register('mail', { required: true })}
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Country:</label>
            <select
              className={styles.inputField}
              {...register('country', { required: true })}
            >
              {' '}
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>City:</label>
            <select
              className={styles.inputField}
              {...register('city', { required: true })}
            >
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Seniority:</label>
            <select
              className={styles.inputField}
              {...register('senority', { required: true })}
            >
              <option value="intern">Intern</option>
              <option value="junior">Junior</option>
              <option value="medior">Medior</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Main Technology:</label>
            <select
              className={styles.inputField}
              {...register('technology', { required: false })}
            />
          </div>

          {/* <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Project Manager:</label>
            <select className={styles.inputField} />
          </div>
          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Project:</label>
            <select className={styles.inputField} />
          </div>
          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Plan:</label>
            <textarea className={styles.textAreaField} />
          </div> */}
          <button type="submit" className={styles.addEmployeeButton}>
            Add Employee
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddNewEmployee;
