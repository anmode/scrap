import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HariSVG } from "../../assets/hari";
import {
  WINDOW_BREAKPOINTS,
  INTERPOLATION_VALUES,
  VIDEO_DURATION_THRESHOLD
} from "../../util/constant";

//@ts-ignore
import video from "../../assets/loader.mp4";
import styles from "./index.module.scss";

const getInterpolateToValues = (windowWidth: number) => {
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
  const [skipLoader, setSkipLoader] = useState(false);

  useEffect(() => {
    setInterpolateTo(getInterpolateToValues(width));
  }, [width, height]);

  const handleSpaceBarPress = (e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter" || e.key === "Escape") {
      setSkipLoader(true);
      scrollAstronautFunction();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSpaceBarPress);
    return () => {
      document.removeEventListener("keydown", handleSpaceBarPress);
    };
  }, []);

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

  const [slideLoader, setSlideLoader] = useState(false);

  const timeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (e.currentTarget.currentTime >= VIDEO_DURATION_THRESHOLD) {
      setSlideLoader(true);
    }
  };

  const landingPageClasses = clsx(
    styles.landingPage,
    slideLoader && styles.landingPage__landing_page_slide_up
  );

  const overlayLoaderClasses = clsx(
    styles.landingPage__overlay_loader,
    slideLoader && styles.landingPage__video_ended
  );

  const navigateToallInterns = () => {
    navigate("/interns/2024/allInterns");
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      // Check if the pressed key is the down arrow key (key code 40)
      if (e.keyCode === 40) {
        handleScroll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={styles.main_wrapper}>
      <Helmet>
        <meta property="og:title" content="HackerSpace" />
        <meta
          property="og:description"
          content="Welcome to HackerSpace - Meet the interns of 2024"
        />
        <title>Hackerspace</title>
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
        }}>
        <motion.div className={styles.landingPage__content} ref={scrollContent}>
          <div className={`${styles.landingPage__Txt_Container} flex_center`}>
            <h1 className={styles.landingPage__Txt}>
              Welcome to
              <br />
              Hacker<span className={styles.landingPage__spaceTxt}>Space</span>
            </h1>
            <h2 className={styles.landingPage__scroll_txt}>
              .{" "}
              <span className={styles.landingPage__scroll_span} onClick={scrollAstronautFunction}>
                scroll
              </span>{" "}
              .
            </h2>
          </div>
          <div ref={scrollAstronaut} className={`${styles.landingPage__astronaut} flex_center`}>
            <div className={`${styles.landingPage__intern_hari_wrap} flex_center`}>
              <HariSVG />
            </div>
            <div className={`${styles.landingPage__intern_btn_wrap} flex_center`}>
              <button
                className={styles.landingPage__meet_intern_btn}
                onClick={navigateToallInterns}>
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
