import styles from './index.module.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HariSVG } from '../../assets/hari';

const interpolationStart = [0, 2000];
const interpolateTo = ['100%', '150%'];
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
      <motion.div className={styles.landingPage_content} ref={scrollContent}>
        <div className={styles.landingPage_Txt_Container}>
          <h1 className={styles.landingPage_Txt}>
            Welcome to
            <br />
            Hacker<span className={styles.spaceTxt}>Space</span>
          </h1>
          <h2 className={styles.scroll_txt}>. scroll .</h2>
          <div className={styles.landingPage_astronaut}>
            <HariSVG />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
