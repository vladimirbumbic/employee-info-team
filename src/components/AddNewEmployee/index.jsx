import { useState } from 'react';
import style from './AddNewEmployee.module.css';
import apiInstance from '../../services/axios';

const AddNewEmployee = () => {
  const [name, setName] = useState('');
  const [surename, setSurename] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async (name, surename, email) => {
    try {
      const response = await apiInstance.post('/api/users', {
        name,
        surename,
        email,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      surename,
      email,
    };

    if (name && surename && email) {
      createUser(user);

      setName('');
      setSurename('');
      setEmail('');
    } else {
      console.log('nece jer su prazna');
      return;
    }
  };

  return (
    <section className={style.newEmployee}>
      <h3>Add new employee</h3>
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
          <label>Surname: </label>
          <input
            type="text"
            placeholder="surname"
            value={surename}
            onChange={(e) => setSurename(e.target.value)}
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
        <button>Add</button>
      </form>
    </section>
  );
};

export default AddNewEmployee;
