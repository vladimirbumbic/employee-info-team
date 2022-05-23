import EmployeeCard from '../EmployeeCard';
import styles from './PManagers.module.css';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getProjectManagers } from '../../services/employees';

const PManagers = () => {
  const { users, setUsers } = useContext(AuthContext);
  const [projectManagersLoaded, setProjectManagersLoaded] = useState(false);

  const handleManagers = async () => {
    const allManagers = await getProjectManagers();
    const managers = allManagers.data;
    setUsers(managers);
    setProjectManagersLoaded(true);
  };

  useEffect(() => {
    handleManagers();
  }, []);

  if (!projectManagersLoaded) {
    return 'Loading...';
  }

  if (users.length === 0) {
    return <div>There is no project manager...</div>;
  }

  return (
    <main>
      <div className={styles.background}>
        <div className={styles.pmanagers}>
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

export default PManagers;
