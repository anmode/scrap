import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HariSVG } from "../../assets/hari";

//@ts-ignore
import video from "../../assets/loader.mp4";
import styles from "./index.module.css";

// Constants for window width breakpoints
const WINDOW_BREAKPOINTS = {
  XXL: 2560,
  XL: 1440,
  LG: 1024,
  MD: 768,
  SM: 695,
  XS: 539,
  XXS: 375,
  XXXS: 320
};

// Constants for interpolation values
const INTERPOLATION_VALUES = {
  XXL: ["220%", "300%"],
  XL: ["240%", "320%"],
  LG: ["300%", "370%"],
  LGP: ["460%", "540%"],
  MD: ["350%", "420%"],
  MDP: ["412%", "520%"],
  SM: ["410%", "500%"],
  XS: ["110%", "170%"],
  XXS: ["100%", "120%"],
  XXXS: ["122%", "160%"]
};

// changing the background size according to the screen size
const getInterpolateToValues = (windowWidth: number) => {
  // Using switch-case for better readability
  switch (true) {
    case windowWidth <= WINDOW_BREAKPOINTS.XXL && windowWidth > WINDOW_BREAKPOINTS.XL:
      return INTERPOLATION_VALUES.XXL;
    case windowWidth <= WINDOW_BREAKPOINTS.XL && windowWidth > WINDOW_BREAKPOINTS.LG:
      return INTERPOLATION_VALUES.XL;
    case windowWidth <= WINDOW_BREAKPOINTS.LG && windowWidth > WINDOW_BREAKPOINTS.MD:
      switch (screen.orientation.type) {
        case "portrait-secondary":
        case "portrait-primary":
          return INTERPOLATION_VALUES.LGP;
      }
      return INTERPOLATION_VALUES.LG;
    case windowWidth <= WINDOW_BREAKPOINTS.MD && windowWidth > WINDOW_BREAKPOINTS.SM:
      switch (screen.orientation.type) {
        case "portrait-secondary":
        case "portrait-primary":
          return INTERPOLATION_VALUES.MDP;
      }
      return INTERPOLATION_VALUES.MD;
    case windowWidth <= WINDOW_BREAKPOINTS.SM && windowWidth > WINDOW_BREAKPOINTS.XS:
      return INTERPOLATION_VALUES.SM;
    case windowWidth <= WINDOW_BREAKPOINTS.XS && windowWidth >= WINDOW_BREAKPOINTS.XXS:
      return INTERPOLATION_VALUES.XS;
    default:
      return INTERPOLATION_VALUES.XXXS;
  }
};

const interpolationStart = [0, 2000];

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const LandingPage: React.FC = () => {
  const scrollContent = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [width, height] = useWindowSize();
  const [interpolateTo, setInterpolateTo] = useState(getInterpolateToValues(width));

  useEffect(() => {
    setInterpolateTo(getInterpolateToValues(width));
  }, [width, height]);

  const { scrollY } = useScroll({
    container: scrollContent
  });
  const backgroundSize = useTransform(scrollY, interpolationStart, interpolateTo);

  const scrollAstronaut = useRef<HTMLDivElement>(null);

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

  const timeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (e.currentTarget.currentTime >= VIDEO_DURATION_THRESHOLD) {
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
          <div className={`${styles.landingPage_Txt_Container} flex_center`}>
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
          <div ref={scrollAstronaut} className={`${styles.landingPage_astronaut} flex_center`}>
            <div className={`${styles.intern_hari_wrap} flex_center`}>
              <HariSVG />
            </div>
            <div className={`${styles.intern_btn_wrap} flex_center`}>
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
