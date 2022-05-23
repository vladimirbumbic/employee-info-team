import EmployeeCard from '../EmployeeCard';
import styles from './Admins.module.css';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getAdmins } from '../../services/employees';

const Admins = () => {
  const { users, setUsers } = useContext(AuthContext);
  const [adminsLoaded, setAdminsLoaded] = useState(false);

  const handleAdmins = async () => {
    const allAdmins = await getAdmins();
    const admins = allAdmins.data;
    setUsers(admins);
    setAdminsLoaded(true);
  };

  useEffect(() => {
    handleAdmins();
  }, []);

  if (!adminsLoaded) {
    return 'Loading...';
  }

  return (
    <main>
      <div className={styles.background}>
        <div className={styles.admins}>
          {users.map((user) => {
            return (
              <EmployeeCard
                key={user.id}
                name={user.name}
                mail={user.email}
                photo={user.photo}
                role={user.role}
                id={user.id}
                seniority={user.seniority}
                city={user.city}
                technology={user.mainTechnology}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Admins;
