import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HariSVG } from "../../assets/hari";
import video from "../../assets/loader.mp4";
import styles from "./index.module.css";

// Constants for window width breakpoints
const WINDOW_BREAKPOINTS = {
  XL: 2560,
  LG: 1440,
  MD: 1024,
  SM: 768,
  XS: 539,
  XXS: 375
};

// Constants for interpolation values
const INTERPOLATION_VALUES = {
  XL: ["220%", "300%"],
  LG: ["240%", "320%"],
  MD: ["300%", "350%"],
  SM: ["350%", "420%"],
  XS: ["110%", "170%"],
  XXS: ["100%", "120%"]
};

const getInterpolateToValues = () => {
  const windowWidth = window.innerWidth;

  // Using switch-case for better readability
  switch (true) {
    case windowWidth <= WINDOW_BREAKPOINTS.XL && windowWidth > WINDOW_BREAKPOINTS.LG:
      return INTERPOLATION_VALUES.XL;
    case windowWidth <= WINDOW_BREAKPOINTS.LG && windowWidth > WINDOW_BREAKPOINTS.MD:
      return INTERPOLATION_VALUES.LG;
    case windowWidth <= WINDOW_BREAKPOINTS.MD && windowWidth > WINDOW_BREAKPOINTS.SM:
      return INTERPOLATION_VALUES.MD;
    case windowWidth <= WINDOW_BREAKPOINTS.SM && windowWidth > WINDOW_BREAKPOINTS.XS:
      return INTERPOLATION_VALUES.SM;
    case windowWidth <= WINDOW_BREAKPOINTS.XS && windowWidth > WINDOW_BREAKPOINTS.XXS:
      return INTERPOLATION_VALUES.XS;
    default:
      return INTERPOLATION_VALUES.XXS;
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
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };

  // Constants for video duration and slide loader threshold
  const VIDEO_DURATION_THRESHOLD = 2.879;
  const [slideLoader, setSlideLoader] = useState(false);

  const timeUpdate = (e) => {
    if (e.target.currentTime >= VIDEO_DURATION_THRESHOLD) {
      setSlideLoader(true);
    }
  };

  // Conditional classes
  const landingPageClasses = clsx(styles.landingPage, slideLoader && styles.landing_page_slide_up);

  const overlayLoaderClasses = clsx(styles.overlay_loader, slideLoader && styles.video_ended);

  const navigateToallInterns = () => {
    navigate("/interns/2024/allInterns");
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
      <div className={overlayLoaderClasses}>
        <video src={video} autoPlay muted onTimeUpdate={timeUpdate}>
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        className={landingPageClasses}
        style={{ backgroundSize }}
        transition={{
          ease: "linear"
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
              .{" "}
              <span className={styles.scroll_span} onClick={scrollAstronautFunction}>
                scroll
              </span>{" "}
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
