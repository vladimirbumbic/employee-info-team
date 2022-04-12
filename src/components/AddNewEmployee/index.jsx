import styles from './AddNewEmployee.module.css';
import { useForm } from 'react-hook-form';
import AvatarLogo from '../../assets/avatarIcon.png';

const AddNewEmployee = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  //   const data = JSON.parse(localStorage.getItem('loginData'));
  //   const profilePhoto = data.photo;
  return (
    <main className={styles.addEmployeeMainContainer}>
      <div className={styles.photoContainer}>
        <img
          className={styles.profilePhoto}
          src={AvatarLogo}
          alt="Profile photo"
        />
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
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>City:</label>
            <select
              className={styles.inputField}
              {...register('city', { required: true })}
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Seniority:</label>
            <select
              className={styles.inputField}
              {...register('senority', { required: true })}
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label className={styles.inputLabel}>Main Technology:</label>
            <select
              className={styles.inputField}
              {...register('technology', { required: true })}
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
