import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './internProfile.module.css';
import { interns } from './internDetails';

// Import planet SVGs
import planet1 from '../../assets/planets/planet1.svg';
import planet2 from '../../assets/planets/planet2.svg';
import planet3 from '../../assets/planets/planet3.svg';

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
            import(`../../../src/assets/internAvtar/${username}.svg`).then((module) => module.default)
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
  const planetBackground = planetBackgrounds[Math.min(groupNumber - 1, planetBackgrounds.length - 1)];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${planetBackground})`,
        }}
        className={styles.landingPage}
      ></div>
      <div className={styles['user-profile']}>
        <h1>{internProfile.name}'s Profile</h1>
        <img src={internImages[0]} alt={`Profile of ${internProfile.name}`} />
        <p>Position: {internProfile.position}</p>
        <p>City: {internProfile.city}</p>
        <p>About: {internProfile.about}</p>
      </div>
    </>
  );
};

export default InternProfilePage;
