import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

import { interns } from "../internProfile/internDetails";
import getAssetPath from "../../util/asset";
import calculatePositionStyle from "../../util/positionInterns";
import type { Intern } from "../../types/intern";

import styles from "./internsPage.module.scss";

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState<Intern[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInternIndex, setSelectedInternIndex] = useState<number | null>(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const planetsBackground = getAssetPath(`planets/allPlanet.webp`);

  // Function to navigate to intern details page
  const handleInternClick = (internUsername: string) => {
    navigate(`/interns/2024/${internUsername}`);
  };

  const handleArrowNavigation = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === "Tab" || event.key === " ") {
      if (selectedInternIndex !== null) {
        handleInternClick(internData[selectedInternIndex].username);
      }
    } else if (event.key === "Escape") {
      navigate(`/interns/2024`, { replace: true });
    } else if (event.key === "ArrowLeft") {
      if (selectedInternIndex !== null && selectedInternIndex > 0) {
        setSelectedInternIndex(selectedInternIndex - 1);
      }
    } else if (event.key === "ArrowRight") {
      if (selectedInternIndex !== null && selectedInternIndex < internData.length - 1) {
        setSelectedInternIndex(selectedInternIndex + 1);
      }
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // Assuming 4 interns per planet
      const internsPerPlanet = 4;
      const currentPlanetIndex = Math.floor(selectedInternIndex! / internsPerPlanet);

      // Calculate the next index based on vertical navigation within the current planet
      let nextIndex;
      if (
        event.key === "ArrowUp" &&
        selectedInternIndex! - 1 > currentPlanetIndex * internsPerPlanet
      ) {
        nextIndex = selectedInternIndex! - 2;
      } else if (
        event.key === "ArrowDown" &&
        selectedInternIndex! + 1 < (currentPlanetIndex + 1) * internsPerPlanet
      ) {
        nextIndex = selectedInternIndex! + 2;
      }

      // Check if the next index is within the bounds of the total interns
      if (nextIndex !== undefined && nextIndex >= 0 && nextIndex < internData.length) {
        setSelectedInternIndex(nextIndex);
      }
    }
  };

  // Function to fetch intern data
  const importData = async () => {
    try {
      const data: Intern[] = Object.values(interns).map((intern) => ({ ...intern }));
      setInternData(data);
    } catch (error) {
      navigate("/notFound");
    } finally {
      setLoading(false);
    }
  };

  // We will not show this page in mobile view
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

  // Effect to handle saved intern for shaking effect
  useEffect(() => {
    const savedInternUsername = localStorage.getItem("shake_intern");
    if (savedInternUsername) {
      const firstInternIndex = internData.findIndex(
        (intern) => intern.username === savedInternUsername
      );
      setSelectedInternIndex(firstInternIndex);

      // Clear the saved intern's name from local storage after a timeout
      setTimeout(() => {
        localStorage.removeItem("shake_intern");
      }, 1000);
    }
  }, [internData]);

  // Effect to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      //@ts-ignore
      handleArrowNavigation(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleArrowNavigation]);

  // Loading state check
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={styles.internspage}
      style={{
        backgroundImage: `url(${planetsBackground})`
      }}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleArrowNavigation(event)}
      tabIndex={0}
    >
      <Helmet>
        <meta property="og:title" content="2024 Interns" />
        <meta property="og:description" content="Meet the interns of 2024" />
        <meta property="og:type" content="website" />
        <title>All Interns Of 2024</title>
      </Helmet>

      {!isMobile &&
        internData.length > 0 &&
        internData.map((intern, index) => {
          const isSelected = index === selectedInternIndex!;
          const positionStyle = calculatePositionStyle(index);

          return (
            <div
              key={index}
              className={isSelected ? styles.internspage__shake : ""}
              style={positionStyle}
            >
              {/* Add data-tip attribute for tooltip */}
              <Link to={`/interns/2024/${intern.username}`} data-tooltip-id={intern.name}>
                <img
                  src={getAssetPath(`internAvatar/${intern.username}.svg`)}
                  alt={`Profile of Intern ${intern.username}`}
                  className={styles.internspage__internavatar}
                  onClick={() => handleInternClick(intern.username)}
                />
              </Link>
              <Tooltip id={intern.name} style={{ marginTop: `-20px` }}>
                {intern.name}
              </Tooltip>
            </div>
          );
        })}
    </div>
  );
};

export default InternsPage;
