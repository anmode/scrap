import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Link from react-router-dom
import { useNavigate, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { interns } from '../internProfile/internDetails';
import getAssetPath from '../../util/asset';
import styles from './internsPage.module.css';

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInternIndex, setSelectedInternIndex] = useState(0);
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

  const handleInternClick = (internUsername) => {
    navigate(`/interns/2024/${internUsername}`);
  };

  const handleArrowNavigation = (event) => {
    if (event.key === 'Enter' || event.key === 'Tab' || event.key === ' ') {
      if (selectedInternIndex !== null) {
        handleInternClick(internData[selectedInternIndex].username);
      }
    } else if (event.key === 'Escape') {
      navigate(`/interns/2024`, { replace: true });
    } else if (event.key === 'ArrowLeft' && selectedInternIndex > 0) {
      setSelectedInternIndex(selectedInternIndex - 1);
    } else if (event.key === 'ArrowRight' && selectedInternIndex < internData.length - 1) {
      setSelectedInternIndex(selectedInternIndex + 1);
    }
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      handleArrowNavigation(event);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleArrowNavigation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.landingPage} onKeyDown={handleArrowNavigation} tabIndex={0}>
      <Helmet>
        <meta property="og:title" content="2024 Interns" />
        <meta property="og:description" content="Meet the interns of 2024" />
        <meta property="og:type" content="website" />
      </Helmet>

      {!isMobile &&
        internData.length > 0 &&
        internData.map((intern, index) => {
          let positionStyle;
          const isSelected = index === selectedInternIndex;

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
            <div key={index} className={isSelected ? styles.shake : ''} style={positionStyle}>
              <Link to={`/interns/2024/${intern.username}`}>
                <img
                  src={intern.avatar}
                  alt={`Profile of Intern ${intern.username}`}
                  className={styles.internAvatar}
                  onClick={() => handleClick(intern.username)}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default InternsPage;
