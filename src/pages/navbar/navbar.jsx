// Navbar.js
import styles from './navbar.module.css';

const Navbar = () => {
  const showGameBtn = window.innerHeight < window.innerWidth && window.innerWidth >= 1024

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>2024 Interns</div>
      {showGameBtn ? <button className={styles.play_game}>Play Game</button> : null}
    </div>
  );
};

export default Navbar;
