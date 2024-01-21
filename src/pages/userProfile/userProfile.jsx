import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './UserProfile.module.css'; // Import the module CSS file
import svg from '../../assets/profile/internProfile.svg';
import svg2 from '../../assets/profile/background.svg';

// Import user profiles and interns data
import { interns } from './userDetails';

const UserProfilePage = () => {
  const { username } = useParams();
  const userProfile = interns[username];

  if (!userProfile) {
    // Handle the case when the user with the provided username is not found
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
