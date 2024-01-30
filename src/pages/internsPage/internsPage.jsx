import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './internsPage.module.css';


import { interns } from '../internProfile/internDetails'; // Import the interns data

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState([]);

  useEffect(() => {
    const importData = async () => {
      try {
        const data = await Promise.all(
          Object.values(interns).map(async (intern) => {
            const avatar = await import(`../../../src/assets/internAvtar/${intern.username}.svg`);
            return {
              ...intern,
              avatar: avatar.default,
            };
          })
        );

        setInternData(data);
        console.log(internData);
      } catch (error) {
        console.error(`Error loading data: ${error}`);
        navigate('/notFound');
      }
    };

    importData();
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      {internData.map((intern, index) => {
        let positionStyle;

        if (index < 4) {
          // Top center
          positionStyle = {
            position: 'absolute',
            top: '20px',
            left: `${index * 100 + 100}px`, 
            transform: 'translateX(-50%)',
          };
        } else if (index < 8) {
          // Left bottom
          positionStyle = {
            position: 'absolute',
            bottom: '20px',
            left: `${index * 100}px`, 
            transform: 'translateX(-50%)',
          };
        } else {
          // Right bottom
          positionStyle = {
            position: 'absolute',
            bottom: '100px',
            right: `${index * 100}px`, 
            transform: 'translateX(50%)',
          };
        }

        return (
          <div key={index} className={styles.internAvatarContainer} style={positionStyle}>
            <img
              src={intern.avatar}
              alt={`Profile of Intern ${intern.username}`}
              className={styles.internAvatar}
            />
            {/* You can add more information or links for each intern if needed */}
            <p>{intern.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InternsPage;
