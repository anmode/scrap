import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './internProfile.module.css';
import { interns } from './internDetails';

// Import planet SVGs
import planet1 from '../../assets/planets/planet1.svg';
import planet2 from '../../assets/planets/planet2.svg';
import planet3 from '../../assets/planets/planet3.svg';

// Import socials png
import linkedin from '../../assets/images/socials/linkedin.png';
import Insta from '../../assets/images/socials/Instagram.png';
import Github from '../../assets/images/socials/Github.png';
import Website from '../../assets/images/socials/Website.png';

const InternProfilePage = () => {
  const { username } = useParams();
  const internProfile = interns[username];
  const [internImages, setInternImages] = useState([]);
  const [loadingBackground, setLoadingBackground] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const importBackground = async () => {
      await import(`../../../src/assets/planets/planet1.svg`);
      await import(`../../../src/assets/planets/planet2.svg`);
      await import(`../../../src/assets/planets/planet3.svg`);
      setLoadingBackground(false);
    };

    importBackground();
  }, []);

  useEffect(() => {
    const importInternImages = async () => {
      try {
        const images = await Promise.all(
          Array.from({ length: 12 }, (_, i) =>
            import(`../../../src/assets/internAvtar/${username}.svg`).then(
              (module) => module.default
            )
          )
        );
        setInternImages(images);
        setLoadingProfile(false);
      } catch (error) {
        // If username is not found, navigate to the ErrorPage
        console.error(`Error loading intern images: ${error}`);
        setLoadingProfile(false);
        navigate('/intern/notFound');
      }
    };

    importInternImages();
  }, [username]);

  if (!internProfile || loadingBackground || loadingProfile) {
    return <div className={styles['user-profile']}>Loading...</div>;
  }

  const determineGroup = (index) => {
    return Math.floor(index / 3) + 1;
  };

  const internIndex = Object.values(interns).findIndex((intern) => intern.username === username);
  const groupNumber = determineGroup(internIndex);

  const planetBackgrounds = [planet1, planet2, planet3];
  const planetBackground =
    planetBackgrounds[Math.min(groupNumber - 1, planetBackgrounds.length - 1)];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${planetBackground})`
        }}
        className={styles.landingPage}></div>
      <div className={styles['user-profile']}>
        <div>
          <img
            className={styles.internAvtar}
            src={internImages[0]}
            alt={`Profile of ${internProfile.name}`}
          />
        </div>
        <div className={styles.inten_info_container}>
          <div className={styles.intern_info}>
            <div className={styles.intern_label}>
              <span className={styles.intern_label_head}>Name</span>
              <span className={styles.intern_label_col}>:</span>
            </div>
            <div className={styles.intern_content}>{internProfile.name}</div>
          </div>
          <div className={styles.intern_info}>
            <div className={styles.intern_label}>
              <span className={styles.intern_label_head}>Role</span>
              <span className={styles.intern_label_col}>:</span>
            </div>
            <div>{internProfile.position}</div>
          </div>
          <div className={styles.intern_info}>
            <div className={styles.intern_label}>
              <span className={styles.intern_label_head}>Hobby</span>
              <span className={styles.intern_label_col}>:</span>
            </div>
            <div>{internProfile.hobby}</div>
          </div>
          <div className={styles.intern_info}>
            <div className={styles.intern_label}>
              <span className={styles.intern_label_head}>About</span>
              <span className={styles.intern_label_col}>:</span>
            </div>
            <div>{internProfile.about}</div>
          </div>
          <div className={styles.intern_info}>
            <div className={styles.intern_label}>
              <span className={styles.intern_label_head}>Socials</span>
              <span className={styles.intern_label_col}>:</span>
            </div>
            <div className={styles.social_container}>
              <span className={styles.social_btn_wrap}>
                <a href={internProfile.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} className={styles.social_btn} alt="LinkedIn" />
                </a>
                <a href={internProfile.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={Insta} className={styles.social_btn} alt="LinkedIn" />
                </a>
                <a href={internProfile.github} target="_blank" rel="noopener noreferrer">
                  <img src={Github} className={styles.social_btn} alt="LinkedIn" />
                </a>
                <a href={internProfile.website} target="_blank" rel="noopener noreferrer">
                  <img src={Website} className={styles.social_btn} alt="LinkedIn" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternProfilePage;
