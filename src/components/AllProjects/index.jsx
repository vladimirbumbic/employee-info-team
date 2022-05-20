import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import EmployeeContext from '../../contexts/EmployeeContext';

const AllProjects = () => {
  const { projects } = useContext(AuthContext);
  const { navbarSearch } = useContext(EmployeeContext);

  return (
    <div>
      {projects
        .filter((project) => {
          if (!navbarSearch) {
            return project;
          } else if (
            project.name.toLowerCase().includes(navbarSearch.toLowerCase())
          ) {
            return project;
          }
        })
        .map((project) => (
          <div key={project.id}>{project.name}</div>
        ))}
    </div>
  );
};

export default AllProjects;
