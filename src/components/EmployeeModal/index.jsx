import React, {
  useContext,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import ReactDOM from 'react-dom';
import styles from './EmployeeModal.module.css';
import { useForm } from 'react-hook-form';
import history from '../CustomRouter/history';
import AuthContext from '../../contexts/AuthContext';
import { changeEmployeeData, getAllEmployees } from '../../services/employees';

const EmployeeModal = forwardRef((props, ref) => {
  const { register, handleSubmit } = useForm();
  const { cities, technologies, setUsers } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const updateEmployeeData = await changeEmployeeData(
      data.mail,
      data.name,
      data.role,
      data.seniority,
      data.city,
      data.technology,
      data.id,
    );

    const employees = await getAllEmployees();
    const updatedUsers = employees.data;
    setUsers(updatedUsers);
    window.localStorage.setItem('users', JSON.stringify(updatedUsers));
    history.replace('/');
  };

  const [modal, setModal] = useState(false);

  function handleEsc(event) {
    if (event.keyCode === 27) {
      close();
    }
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = modal ? 'hidden' : '';

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modal]);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
    };
  });

  const open = () => {
    setModal(true);
  };
  const close = () => {
    setModal(false);
  };

  if (modal) {
    document.body.classList.add('styles.activeModal');
  } else {
    document.body.classList.remove('styles.activeModal');
  }

  if (modal) {
    return ReactDOM.createPortal(
      <div className={styles.modalWrapper}>
        <div className={styles.modalBackdrop} />
        <div className={styles.modalBox}>
          <button onClick={close} className={styles.closeButton}>
            x
          </button>

          <div className={styles.formContainer}>
            <div className={styles.photo}>
              <img
                className={styles.profilePhoto}
                src={props.photo}
                alt={props.name + ' photo'}
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                {...register('id', { required: true })}
                value={props.id}
              />
              <div className={styles.labelInputContainer}>
                <label className={styles.inputLabel}>Name: </label>
                <input
                  type="text"
                  defaultValue={props.name}
                  className={styles.inputField}
                  {...register('name', { required: true })}
                />
              </div>

              <div className={styles.labelInputContainer}>
                <label className={styles.inputLabel}>Mail:</label>
                <input
                  type="email"
                  defaultValue={props.mail}
                  className={styles.inputField}
                  {...register('mail', { required: true })}
                />
              </div>

              <div className={styles.labelInputContainer}>
                <label className={styles.inputLabel}>Role:</label>
                <select
                  defaultValue={props.role?.toLowerCase()}
                  className={styles.inputField}
                  {...register('role', { required: true })}
                >
                  <option value="system_admin">System admin</option>
                  <option value="project_manager">Project manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>

              <div className={styles.labelInputContainer}>
                <label className={styles.inputLabel}>City:</label>
                <select
                  defaultValue={props.city?.id}
                  className={styles.inputField}
                  {...register('city', { required: true })}
                >
                  {cities
                    ? cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>

              <div className={styles.labelInputContainer}>
                <label className={styles.inputLabel}>Seniority:</label>
                <select
                  defaultValue={props.seniority?.toLowerCase()}
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
                <label className={styles.inputLabel}>Technology:</label>
                <select
                  defaultValue={props.technology?.id}
                  className={styles.inputField}
                  {...register('technology', { required: true })}
                >
                  {technologies
                    ? technologies.map((tech) => (
                        <option key={tech.id} value={tech.id}>
                          {tech.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className={styles.btn}>
                <button type="submit" className={styles.updateEmployeeButton}>
                  Change data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>,
      document.getElementById('modalRoot'),
    );
  }
  return null;
});

export default EmployeeModal;
