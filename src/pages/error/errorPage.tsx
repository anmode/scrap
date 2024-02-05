import React from "react";

import styles from "./errorPage.module.scss";

const ErrorPage: React.FC = () => {
  return (
    <div className={`${styles.error} flex_center`}>
      <h1 className={styles.error__heading}>Oops! Something went wrong.</h1>
      <p className={styles.error__message}>The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default ErrorPage;
