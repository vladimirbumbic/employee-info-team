import React from 'react';
import style from './Error.module.css';

const Error = () => {
  return (
    <section className={style.errorWrapper}>
      <h1 className={style.status}>404</h1>
      <h3>Page not found!</h3>
    </section>
  );
};

export default Error;
