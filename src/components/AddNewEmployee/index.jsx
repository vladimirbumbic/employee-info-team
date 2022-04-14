import { useState } from 'react';
import style from './AddNewEmployee.module.css';
import apiInstance from '../../services/axios';

const AddNewEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seniority, setSeniority] = useState('');

  const createUser = async (user) => {
    try {
      const response = await apiInstance.post('/api/users', user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      seniority,
    };

    if (name && email && seniority) {
      createUser(user);
    } else {
      return;
    }
  };

  return (
    <section className={style.newEmployee}>
      <h2>Add new employee</h2>
      <div></div>
      <form onSubmit={handleSubmit}>
        <div className={style.singleInput}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.singleInput}>
          <label>Email: </label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.singleInput}>
          <label>Seniority: </label>
          <input
            type="text"
            placeholder="seniority"
            value={seniority}
            onChange={(e) => setSeniority(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </section>
  );
};

export default AddNewEmployee;
