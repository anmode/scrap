import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HariSVG } from '../../assets/hari';
import video from '../../assets/loader.mp4';
import styles from './index.module.css';

const getInterpolateToValues = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 2560 && windowWidth > 1440) {
    return ['220%', '300%'];
  } else if (windowWidth <= 1440 && windowWidth > 1024) {
    return ['240%', '320%'];
  } else if (windowWidth <= 1024 && windowWidth > 768) {
    return ['300%', '350%'];
  } else if (windowWidth <= 768 && windowWidth > 539) {
    return ['350%', '420%'];
  } else if (windowWidth <= 539 && windowWidth > 375) {
    return ['110%', '170%'];
  } else {
    return ['100%', '120%'];
  }
};

const interpolationStart = [0, 2000];
const interpolateTo = getInterpolateToValues();

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

  const navigateToallInterns = () => {
    navigate('/interns/2024/allInterns');
  };

  return (
    <div className={styles.main_wrapper}>
      <Helmet>
        <meta property="og:title" content="HackerSpace" />
        <meta
          property="og:description"
          content="Welcome to HackerSpace - Meet the interns of 2024"
        />
      </Helmet>
      <div
        className={
          slideLoader
            ? `${styles.overlay_loader} ${styles.video_ended}`
            : `${styles.overlay_loader}`
        }
      >
        <video src={video} autoPlay muted onTimeUpdate={timeUpdate}>
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        className={
          slideLoader
            ? `${styles.landingPage} ${styles.landing_page_slide_up}`
            : `${styles.landingPage}`
        }
        style={{ backgroundSize }}
        transition={{
          ease: 'linear'
        }}
      >
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
          </div>
          <div ref={scrollAstronaut} className={styles.landingPage_astronaut}>
            <div className={styles.intern_hari_wrap}>
              <HariSVG />
            </div>
            <div className={styles.intern_btn_wrap}>
              <button className={styles.meet_intern_btn} onClick={navigateToallInterns}>
                Meet my Interns
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
