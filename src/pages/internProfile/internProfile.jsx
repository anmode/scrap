import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './internProfile.module.css';

// Import user profiles and interns data
import { interns } from './internDetails';

const interProfilePage = () => {
  const { username } = useParams();
  const internProfile = interns[username];
  const [internImages, setInternImages] = useState([]);

  useEffect(() => {
    const importInternImages = async () => {
      const images = [];
      for (let i = 1; i <= 12; i++) {
        const internSVG = (await import(`../../../src/assets/internAvtar/${username}.svg`)).default;
        images.push(internSVG);
      }
      setInternImages(images);
    };

    console.log(importInternImages);

    importInternImages();
  }, [username]);

  if (!internProfile || internImages.length === 0) {
    return <div className={styles['user-profile']}>User not found</div>;
  }

  const group1Interns = internImages.slice(0, 4);
  const group2Interns = internImages.slice(4, 8);
  const group3Interns = internImages.slice(8, 12);

  const determineGroup = (index) => {
    if (index < 4) return 1;
    if (index < 8) return 2;
    return 3;
  };

  const groupNumber = determineGroup(internImages.indexOf(group1Interns[0]));

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/planets/planet${groupNumber}.jpg)`,
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

export default interProfilePage;
