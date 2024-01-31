import styles from './index.module.css';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HariSVG } from '../../assets/hari';
import video from '../../assets/loader.mp4';
import {useNavigate} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Link, Outlet } from 'react-router-dom';

const interpolationStart = [0, 2000];
const interpolateTo = ['220%', '300%'];
const LandingPage = () => {
  const scrollContent = useRef(null);
  const navigate = useNavigate();
  const { scrollY } = useScroll({
    container: scrollContent
  });
  const backgroundSize = useTransform(scrollY, interpolationStart, interpolateTo);

  const scrollAstronaut = useRef(null);

  const scrollAstronautFunction = () => {
    scrollAstronaut.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  };

  const [slideLoader, setSlideLoader] = useState(false);

  const timeUpdate = (e) => {
    if (e.target.currentTime >= 2.879) {
      setSlideLoader(true);
    }
  };

  const navigateToAllInterns = () => {
    navigate('/interns/2024/allInterns');
  };

  return (
    <div className={styles.main_wrapper}>
      <div
        className={
          slideLoader
            ? `${styles.overlay_loader} ${styles.video_ended}`
            : `${styles.overlay_loader}`
        }>
        <video src={video} width="100%" height="100%" autoPlay muted onTimeUpdate={timeUpdate}>
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        className={slideLoader ? `${styles.landingPage} ${styles.landing_page_slide_up}` : `${styles.landingPage}`}
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
            <h2 className={styles.scroll_txt}>
              .{' '}
              <span className={styles.scroll_span} onClick={scrollAstronautFunction}>
                scroll
              </span>{' '}
              .
            </h2>
            <div ref={scrollAstronaut} className={styles.landingPage_astronaut}>
              <div className={styles.intern_hari_wrap}>
                <HariSVG />
              </div>
              <div className={styles.intern_btn_wrap}>
                <button className={styles.meet_intern_btn} onClick={navigateToAllInterns}>Meet my Interns</button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
