// Navbar.js
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>2024 Interns</div>
      <div>
        <button className={styles.play_game}>Play Game</button>
      </div>
    </div>
  );
};

export default Navbar;
