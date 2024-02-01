import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { interns } from '../internProfile/internDetails';
import getAssetPath from '../../util/asset';
import styles from './internsPage.module.css';

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const importData = async () => {
    try {
      const data = Object.values(interns).map((intern) => ({
        ...intern,
        avatar: getAssetPath(`/internAvtar/${intern.username}.svg`)
      }));

      setInternData(data);
    } catch (error) {
      navigate('/notFound');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isMobile) {
        navigate(`/interns/2024/anmol`, { replace: true });
      } else {
        await importData();
      }
    };

    fetchData();
  }, [navigate, isMobile]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.landingPage}>
      <Helmet>
        <meta property="og:title" content="2024 Interns" />
        <meta property="og:description" content="Meet the interns of 2024" />
        <meta property="og:type" content="website" />
      </Helmet>

      {!isMobile &&
        internData.length > 0 &&
        internData.map((intern, index) => {
          let positionStyle;

          if (index < 4) {
            positionStyle = {
              position: 'absolute',
              top: `${11 + 10 * positionConfig[index % 4][0]}%`,
              left: `${44 + 6.25 * positionConfig[index % 4][1]}%`
            };
          } else if (index < 8) {
            positionStyle = {
              position: 'absolute',
              top: `${60 + 10 * positionConfig[index % 4][0]}%`,
              left: `${20 + 6.25 * positionConfig[index % 4][1]}%`
            };
          } else {
            positionStyle = {
              position: 'absolute',
              top: `${60 + 10 * positionConfig[index % 4][0]}%`,
              left: `${68 + 6.25 * positionConfig[index % 4][1]}%`
            };
          }

          return (
            <div key={index} style={positionStyle}>
              <img
                src={intern.avatar}
                alt={`Profile of Intern ${intern.username}`}
                className={styles.internAvatar}
                onClick={() => handleClick(intern.username)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default InternsPage;
