import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { interns } from "./internDetails";
import type { Intern } from "../../types/intern";
import getAssetPath from "../../util/asset";

import styles from "./internProfile.module.scss";

const InternProfilePage: React.FC = () => {
  // Extracting username from route parameters
  const { username } = useParams<{ username?: string }>();

  // Retrieving intern profile based on the username
  const internProfile: Intern | undefined = username ? interns[username] : undefined;

  // Navigation hook for programmatic navigation
  const navigate = useNavigate();

  // Fetching all usernames and current index
  const allUsernames = Object.keys(interns);
  const currentIndex = allUsernames.indexOf(username!);

  // Handling keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace" || event.key === "Escape") {
        localStorage.setItem("shake_intern", internProfile?.username || "");
        navigate(`/interns/2024/allInterns`, { replace: true });
      } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        navigate(`/interns/2024/${allUsernames[currentIndex - 1]}`);
      } else if (event.key === "ArrowRight" && currentIndex < allUsernames.length - 1) {
        navigate(`/interns/2024/${allUsernames[currentIndex + 1]}`);
      }
    };

    // Adding event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Cleaning up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, allUsernames, navigate]);

  // Determine group number for the planet background
  const determineGroup = (index: number) => Math.floor(index / 4) + 1;

  // Navigate to a specific intern based on index
  const navigateToIntern = (index: number) => {
    if (index >= 0 && index < allUsernames.length) {
      const nextUsername = allUsernames[index];
      navigate(`/interns/2024/${nextUsername}`);
    }
  };

  // Navigate to the next and previous interns
  const navigateToNextIntern = () => navigateToIntern(currentIndex + 1);
  const navigateToPrevIntern = () => navigateToIntern(currentIndex - 1);

  // Extracting intern index and determining group number for planet background
  const internIndex = Object.values(interns).findIndex((intern) => intern.username === username);
  const groupNumber = determineGroup(internIndex);
  const planetBackground = getAssetPath(`planets/planet${groupNumber}.webp`);

  // Navigate back to all interns page
  const navigateToallInterns = () => {
    localStorage.setItem("shake_intern", internProfile?.username || "");
    navigate("/interns/2024/allInterns", { replace: true });
  };

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  // Render the component
  return (
    <>
      <Helmet>
        <meta property="og:title" content={`${internProfile?.name}'s Profile`} />
        <meta property="og:description" content={`Learn more about ${internProfile?.name}`} />
        <meta property="og:image" content={getAssetPath(`internProfileAvatar/${username}.svg`)} />
        <title>{capitalizeFirstLetter(username || "")}'s Profile</title>
        <meta
          property="og:url"
          content={`https://interns2024.pages.dev/interns/2024/${username}`}
        />
        <meta property="og:type" content="profile" />
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${planetBackground})`
        }}
        className={`${styles.internprofile} flex_center`}
        role="banner"
        aria-label="Intern Profile Background"
      >
        <div className={styles.internprofile__card}>
          <button className={styles.internprofile__backAllButton} onClick={navigateToallInterns}>
            <span>Back</span>
          </button>

          <div className={styles.internprofile__cardContent}>
            <div className={styles.internprofile__img_container}>
              <img
                className={styles.internprofile__internAvatar}
                src={getAssetPath(`internProfileAvatar/${username}.svg`)}
                alt={`Profile of ${internProfile?.name}`}
              />
            </div>
            <div className={styles.internprofile__intern_info_container}>
              <div className={styles.internprofile__intern_info}>
                <div className={styles.internprofile__intern_label}>
                  <span className={styles.internprofile__intern_label_head}>Name</span>
                  <span className={styles.internprofile__intern_label_col}>:</span>
                </div>
                <p className="flex_center">{internProfile?.name}</p>
              </div>
              <div className={styles.internprofile__intern_info}>
                <div className={styles.internprofile__intern_label}>
                  <span className={styles.internprofile__intern_label_head}>Role</span>
                  <span className={styles.internprofile__intern_label_col}>:</span>
                </div>
                <p className="flex_center">{internProfile?.position}</p>
              </div>
              <div className={styles.internprofile__intern_info}>
                <div className={styles.internprofile__intern_label}>
                  <span className={styles.internprofile__intern_label_head}>Hobby</span>
                  <span className={styles.internprofile__intern_label_col}>:</span>
                </div>
                <p className="flex_center">{internProfile?.hobby}</p>
              </div>
              <div className={styles.internprofile__intern_info}>
                <div className={styles.internprofile__intern_label}>
                  <span className={styles.internprofile__intern_label_head}>About</span>
                  <span className={styles.internprofile__intern_label_col}>:</span>
                </div>
                <p className="flex_center">{internProfile?.about}</p>
              </div>
              <div className={styles.internprofile__intern_info}>
                <div className={styles.internprofile__intern_label}>
                  <span className={styles.internprofile__intern_label_head}>Socials</span>
                  <span className={styles.internprofile__intern_label_col}>:</span>
                </div>
                <div className={styles.internprofile__social_container}>
                  <span className={styles.internprofile__social_btn_wrap}>
                    <a
                      href={internProfile?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <img
                        src={getAssetPath("images/socials/linkedin.png")}
                        className={`${styles.internprofile__social_btn}`}
                        alt="LinkedIn"
                      />
                    </a>
                    <a
                      href={internProfile?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <img
                        src={getAssetPath("images/socials/Instagram.png")}
                        className={styles.internprofile__social_btn}
                        alt="Instagram"
                      />
                    </a>
                    <a
                      href={internProfile?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <img
                        src={getAssetPath("images/socials/Github.png")}
                        className={styles.internprofile__social_btn}
                        alt="GitHub"
                      />
                    </a>
                    <a
                      href={internProfile?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <img
                        src={getAssetPath("images/socials/Website.png")}
                        className={styles.internprofile__social_btn}
                        alt="Website"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {currentIndex > 0 && (
            <button className={`${styles.internprofile__backButton} flex_center`} onClick={navigateToPrevIntern}>
              &#10140;
            </button>
          )}
          {currentIndex < allUsernames.length - 1 && (
            <button className={`${styles.internprofile__nextButton} flex_center`} onClick={navigateToNextIntern}>
              &#10140;
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default InternProfilePage;
