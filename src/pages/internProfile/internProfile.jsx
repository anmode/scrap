import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './internProfile.module.css';
import { interns } from './internDetails';

import planet1 from '../../assets/planets/planet1.webp';
import planet2 from '../../assets/planets/planet2.webp';
import planet3 from '../../assets/planets/planet3.webp';

import linkedin from '../../assets/images/socials/linkedin.png';
import Insta from '../../assets/images/socials/Instagram.png';
import Github from '../../assets/images/socials/Github.png';
import Website from '../../assets/images/socials/Website.png';

const InternProfilePage = () => {
  const { username } = useParams();
  const internProfile = interns[username];
  const [internImages, setInternImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const allUsernames = Object.keys(interns);
  const currentIndex = allUsernames.indexOf(username);

  
    useEffect(() => {
      const importData = async () => {
        try {
          // Import background planets
          await import(`../../../src/assets/planets/planet1.webp`);
          await import(`../../../src/assets/planets/planet2.webp`);
          await import(`../../../src/assets/planets/planet3.webp`);
  
          // Import intern avatars dynamically
          const images = await Promise.all(
            Array.from({ length: 12 }, (_, i) =>
              import(`../../../src/assets/internAvtar/${username}.svg`).then(
                (module) => module.default
              )
            )
          );
  
          setInternImages(images);
          setLoading(false);
        } catch (error) {
          console.error(`Error loading data: ${error}`);
          setLoading(false);
          navigate('/intern/notFound');
        }
      };
  
      importData();
    }, [username, navigate]);



    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
          navigate('interns/2024/allInterns');
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
          navigate(`/${allUsernames[currentIndex - 1]}`);
        } else if (event.key === 'ArrowRight' && currentIndex < allUsernames.length - 1) {
          navigate(`/${allUsernames[currentIndex + 1]}`);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [currentIndex, allUsernames, navigate]);
  

    if (loading) {
        return <div className={styles['user-profile']}>Loading...</div>;
    }

  const determineGroup = (index) => {
    return Math.floor(index / 4) + 1;
  };


  const navigateToIntern = (index) => {
    if (index >= 0 && index < allUsernames.length) {
      const nextUsername = allUsernames[index];
      navigate(`/interns/2024/${nextUsername}`);
    }
  };

  const navigateToNextIntern = () => {
    navigateToIntern(currentIndex + 1);
  };

  const navigateToPrevIntern = () => {
    navigateToIntern(currentIndex - 1);
  };


  const internIndex = Object.values(interns).findIndex((intern) => intern.username === username);
  // console.log(internIndex);
  const groupNumber = determineGroup(internIndex);
  // console.log(groupNumber);

  const planetBackgrounds = [planet1, planet2, planet3];
  const planetBackground =
    planetBackgrounds[Math.min(groupNumber - 1, planetBackgrounds.length - 1)];

    const navigateToAllInterns = () => {
      navigate('/interns/2024/allInterns');
    };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${planetBackground})`
        }}
        className={styles.landingPage}
        role="banner"
        aria-label="Intern Profile Background"
      >
        <div className={styles['user-profile']}>
      <button className={styles.backAllButton} onClick={navigateToAllInterns}>
          Back
        </button>
        <div className={styles.img_container}>
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
                <a
                  href={internProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={linkedin} className={styles.social_btn} alt="LinkedIn" />
                </a>
                <a
                  href={internProfile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src={Insta} className={styles.social_btn} alt="Instagram" />
                </a>
                <a
                  href={internProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src={Github} className={styles.social_btn} alt="GitHub" />
                </a>
                <a
                  href={internProfile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <img src={Website} className={styles.social_btn} alt="Website" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
   
      </div>

      <div className={styles.navigationButtons}>
  {currentIndex > 0 && (
    <button className={styles.backButton} onClick={navigateToPrevIntern}>
      &larr;
    </button>
  )}
  {currentIndex < allUsernames.length - 1 && (
    <button className={styles.nextButton} onClick={navigateToNextIntern}>
      &rarr;
    </button>
  )}
</div>
    </>
  );
};

export default InternProfilePage;
