import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './internsPage.module.css';
import { interns } from '../internProfile/internDetails';
import { useMediaQuery } from 'react-responsive';
import getAssetPath from '../../util/asset';

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

  const handleClick = (internUsername) => {
    navigate(`/interns/2024/${internUsername}`);
  };

  const importData = () => {
    try {
      const data = Object.values(interns).map(intern => ({
        ...intern,
        avatar: getAssetPath(`/internAvtar/${intern.username}.svg`)
      }));

      setInternData(data);
    } catch (error) {
      console.error(`Error loading data: ${error}`);
      navigate('/notFound');
    }
  };

  useEffect(() => {
    if (isMobile) {
      navigate('interns/2024/anmol');
    } else {
      importData();
    }
  }, [navigate, isMobile]);

  return (
    <div className={styles.landingPage}>
      {/* Render your interns only if it's not a mobile view */}
      {!isMobile && internData.length > 0 && internData.map((intern, index) => {
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
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(intern.username)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InternsPage;
