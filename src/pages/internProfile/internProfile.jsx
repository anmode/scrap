import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './internProfile.module.css';
import svg from '../../assets/profile/internProfile.svg';
import svg2 from '../../assets/profile/background.svg';

// Import user profiles and interns data
import { interns } from './internDetails';

const UserProfilePage = () => {
  const { username } = useParams();
  const userProfile = interns[username];

  if (!userProfile) {
    return <div className={styles['user-profile']}>User not found</div>;
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${svg2})` }} className={styles.landingPage}></div>
      <img className={styles.internAvtar} src={svg} alt="Astronaut" />
      <div className={styles['user-profile']}>
        <h1>{userProfile.name}'s Profile</h1>
        <p>Position: {userProfile.position}</p>
        <p>City: {userProfile.city}</p>
        <p>About: {userProfile.about}</p>
        {/* Add more profile information as needed */}
      </div>
    </>
  );
};

export default UserProfilePage;
