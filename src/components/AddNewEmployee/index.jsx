import styles from './AddNewEmployee.module.css';
import { useForm } from 'react-hook-form';
import AvatarLogo from '../../assets/avatarIcon.png';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import history from '../CustomRouter/history';
import { addEmployee, getAllEmployees } from '../../services/employees';
import { useState } from 'react';

const AddNewEmployee = () => {
  // const [files, setFiles] = useState();

  const { countries, cities, technologies, users, setUsers } =
    useContext(AuthContext);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    console.log(users);
    const employeeResponse = await addEmployee(
      data.mail,
      data.name,
      data.role,
      data.seniority,
      data.city,
      data.technology,
    );
    setUsers([
      ...users,
      {
        id: employeeResponse.data,
        name: data.name,
        mail: data.mail,
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      },
    ]);
    window.localStorage.setItem(
      'users',
      JSON.stringify([
        ...users,
        {
          id: employeeResponse.data,
          name: data.name,
          email: data.mail,
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        },
      ]),
    );
    history.replace('/');
    const employees = await getAllEmployees();
    const updatedUsers = employees.data;
    setUsers(updatedUsers);
    window.localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <main className={styles.addEmployeeMainContainer}>
      <div className={styles.photoContainer}>
        <img className={styles.profilePhoto} src={AvatarLogo} alt="Profile" />
        <div className={styles.labelInputContainer}>
          <label>Add profile photo</label>
          <input
            className={styles.customFileInput}
            type="file"
            // onChange={(e) => setFiles(e.target.files[0])}
          />
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
            <label className={styles.inputLabel}>Role:</label>
            <select
              className={styles.inputField}
              {...register('role', { required: true })}
            >
              <option value="system_admin">System admin</option>
              <option value="project_manager">Project manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          {/* <div className={styles.labelInputContainer}>
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
          </div> */}

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
              {...register('seniority', { required: true })}
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
            >
              {technologies.map((technology) => (
                <option key={technology.id} value={technology.id}>
                  {technology.name}
                </option>
              ))}
            </select>
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
