import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const showGameBtn: boolean = window.innerHeight < window.innerWidth && window.innerWidth >= 1024;

  const handlePlayGameClick = () => {
    // we will redirect to game route
    console.log("Play Game button clicked!");
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="2024 Interns" />
        <meta property="og:description" content="Meet the interns of 2024" />
      </Helmet>
      <div className={styles.header_container}>
        <a href="/interns/2024" className={styles.header} style={{ textDecoration: "none" }}>
          2024 Interns
        </a>
        {showGameBtn ? (
          <button className={styles.play_game} onClick={handlePlayGameClick}>
            Play Game
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
