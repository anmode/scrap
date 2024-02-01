import React from 'react';
import styles from './errorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oops! Something went wrong.</h1>
      <p className={styles.message}>The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default ErrorPage;
