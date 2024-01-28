import styles from './index.module.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HariSVG } from '../../assets/hari';

const interpolationStart = [0, 2000];
const interpolateTo = ['220%', '300%'];
const LandingPage = () => {
  const scrollContent = useRef(null);
  const { scrollY } = useScroll({
    container: scrollContent
  });
  const backgroundSize = useTransform(scrollY, interpolationStart, interpolateTo);

  return (
    <motion.div
      className={styles.landingPage}
      style={{ backgroundSize }}
      transition={{
        ease: 'linear'
      }}>
      <div className={styles.header_container}>
        <div className={styles.header}>2024 Interns</div>
        <div>
          <button className={styles.play_game}>Play Game</button>
        </div>
      </div>
      <motion.div className={styles.landingPage_content} ref={scrollContent}>
        <div className={styles.landingPage_Txt_Container}>
          <h1 className={styles.landingPage_Txt}>
            Welcome to
            <br />
            Hacker<span className={styles.spaceTxt}>Space</span>
          </h1>
          <h2 className={styles.scroll_txt}>. scroll .</h2>
          <div className={styles.landingPage_astronaut}>
            <div className={styles.intern_hari_wrap}>
              <HariSVG />
            </div>
            <div className={styles.intern_btn_wrap}>
              <button className={styles.meet_intern_btn}>Meet my Interns</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
