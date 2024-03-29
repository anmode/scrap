import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  WINDOW_BREAKPOINTS,
  INTERPOLATION_VALUES,
  VIDEO_DURATION_THRESHOLD,
  SCREEN_ORIENTATION,
  DOWN_ARROW_KEY_CODE,
  INTERPOLATION_START
} from "../../util/constant";
import getAssetPath from "../../util/asset";

import styles from "./index.module.scss";

// Function to determine interpolation values based on window width
const getInterpolateToValues = (windowWidth: number) => {
  let result;

  switch (true) {
    case windowWidth <= WINDOW_BREAKPOINTS.XXL && windowWidth > WINDOW_BREAKPOINTS.XL:
      result = INTERPOLATION_VALUES.XXL;
      break;
    case windowWidth <= WINDOW_BREAKPOINTS.XL && windowWidth > WINDOW_BREAKPOINTS.LG:
      result = INTERPOLATION_VALUES.XL;
      break;
    case windowWidth <= WINDOW_BREAKPOINTS.LG && windowWidth > WINDOW_BREAKPOINTS.MD:
      switch (screen.orientation.type) {
        case SCREEN_ORIENTATION.SECONDARY:
        case SCREEN_ORIENTATION.PRIMARY:
          result = INTERPOLATION_VALUES.LGP;
          break;
        default:
          result = INTERPOLATION_VALUES.LG;
      }
      break;
    case windowWidth <= WINDOW_BREAKPOINTS.MD && windowWidth > WINDOW_BREAKPOINTS.SM:
      switch (screen.orientation.type) {
        case SCREEN_ORIENTATION.SECONDARY:
        case SCREEN_ORIENTATION.PRIMARY:
          result = INTERPOLATION_VALUES.MDP;
          break;
        default:
          result = INTERPOLATION_VALUES.MD;
      }
      break;
    case windowWidth <= WINDOW_BREAKPOINTS.SM && windowWidth > WINDOW_BREAKPOINTS.XS:
      result = INTERPOLATION_VALUES.SM;
      break;
    case windowWidth <= WINDOW_BREAKPOINTS.XS && windowWidth >= WINDOW_BREAKPOINTS.XXS:
      result = INTERPOLATION_VALUES.XS;
      break;
    default:
      result = INTERPOLATION_VALUES.XXXS;
  }

  return result;
};

// Hook to get window size
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

  // Get initial window size
  const [width, height] = useWindowSize();

  // State for interpolation values and skipping loader
  const [interpolateTo, setInterpolateTo] = useState(getInterpolateToValues(width));
  const [skipLoader, setSkipLoader] = useState(false);

  // Update interpolation values on window resize
  useEffect(() => {
    setInterpolateTo(getInterpolateToValues(width));
  }, [width, height]);

  // Handler for space bar press
  const handleSpaceBarPress = (e: KeyboardEvent) => {
    if ([" ", "Enter", "Escape"].includes(e.key)) {
      setSkipLoader(true);
      scrollAstronautFunction();
    }
  };

  // Add event listener for space bar press
  useEffect(() => {
    document.addEventListener("keydown", handleSpaceBarPress);

    return () => {
      document.removeEventListener("keydown", handleSpaceBarPress);
    };
  }, []);

  // Framer Motion hook for scroll position
  const { scrollY } = useScroll({
    container: scrollContent
  });

  // Framer Motion hook for background size interpolation
  const backgroundSize = useTransform(scrollY, INTERPOLATION_START, interpolateTo);

  const scrollAstronaut = useRef<HTMLDivElement>(null);

  // Function to scroll to the astronaut section
  const scrollAstronautFunction = () => {
    scrollAstronaut.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };

  // State for controlling loader slide
  const [slideLoader, setSlideLoader] = useState(false);

  // Callback for video time update
  const timeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (e.currentTarget.currentTime >= VIDEO_DURATION_THRESHOLD) {
      setSlideLoader(true);
    }
  };

  // Class names for the landing page and overlay loader
  const landingPageClasses = clsx(
    styles.landingpage,
    styles.flex_center,
    slideLoader && styles.landingpage__landing_page_slide_up
  );

  const overlayLoaderClasses = clsx(
    styles.landingpage__overlay_loader,
    slideLoader && styles.landingpage__video_ended
  );

  // Navigation function to all interns page
  const navigateToallInterns = () => {
    navigate("/interns/2024/allInterns");
  };

  // Scroll to next section function
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  // Add event listener for down arrow key press
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === DOWN_ARROW_KEY_CODE) {
        handleScroll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={styles.landingpage__wrapper}>
      <Helmet>
        <meta property="og:title" content="HackerSpace" />
        <meta
          property="og:description"
          content="Welcome to HackerSpace - Meet the interns of 2024"
        />
        <title>Hackerspace</title>
      </Helmet>
      <div className={overlayLoaderClasses}>
        <video src={getAssetPath("loader.mp4")} autoPlay muted playsInline onTimeUpdate={timeUpdate}>
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
        <motion.div className={styles.landingpage__content} ref={scrollContent}>
          <div className={`${styles.landingpage__txt_container} flex_center`}>
            <h1 className={styles.landingpage__txt}>
              Welcome to
              <br />
              Hacker<span className={styles.landingpage__spacetxt}>Space</span>
            </h1>
            <h2 className={styles.landingpage__scroll_txt}>
              .{" "}
              <span className={styles.landingpage__scroll_span} onClick={scrollAstronautFunction}>
                scroll
              </span>{" "}
              .
            </h2>
          </div>
          <div ref={scrollAstronaut} className={`${styles.landingpage__astronaut} flex_center`}>
            <div className={`${styles.landingpage__intern_hari_wrap}`}>
              <img
                src={getAssetPath("hariastro.png")}
                alt="hari"
                className={styles.landingpage__hari_img}
              />
              <div className={styles.landingpage__hari_wave}>
                <h3 className={styles.landingpage__hari_hi}>Hi! I’m Hari</h3>
              </div>
            </div>
            <div className={`${styles.landingpage__intern_btn_wrap} flex_center`}>
              <button
                className={styles.landingpage__meet_intern_btn}
                onClick={navigateToallInterns}
              >
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
