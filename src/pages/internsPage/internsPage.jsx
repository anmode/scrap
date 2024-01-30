import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './internsPage.module.css';
import { interns } from '../internProfile/internDetails';
import { useMediaQuery } from 'react-responsive';

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const positionConfig = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ];
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
    if (isMobile) {
      navigate('/anmol');
    } else {
      importData();
    }
  }, [navigate, isMobile, internData]);

  return (
    <div className={styles.landingPage}>
      {/* Render your interns only if it's not a mobile view */}
      {!isMobile && internData.map((intern, index) => {
        let positionStyle;

        if (index < 4) {
          positionStyle = {
            position: 'absolute',
            top: `${11 + 10*(positionConfig[index%4][0])}%`,
            left: `${44+ 6.25*(positionConfig[index % 4][1])}%`,
          };
        } else if (index < 8) {
          positionStyle = {
            position: 'absolute',
            top: `${60 + 10*(positionConfig[index % 4][0])}%`,
            left: `${20 + 6.25*(positionConfig[index % 4][1])}%`,
          };
        } else {
          positionStyle = {
            position: 'absolute',
            top: `${60 + 10 *(positionConfig[index % 4][0])}%`,
            left: `${68 + 6.25 * (positionConfig[index % 4][1])}%`,
          };
        }

        return (
          <div key={index} className={styles.internAvatarContainer} style={positionStyle}>
            <img
              src={intern.avatar}
              alt={`Profile of Intern ${intern.username}`}
              className={styles.internAvatar}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InternsPage;
