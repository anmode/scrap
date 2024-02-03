import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { interns } from "../internProfile/internDetails";
import getAssetPath from "../../util/asset";
import styles from "./internsPage.module.css";
import calculatePositionStyle from "../../util/positionInterns";

import type { Intern } from "../../types/intern";

const InternsPage = () => {
  const navigate = useNavigate();
  const [internData, setInternData] = useState<Intern[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInternIndex, setSelectedInternIndex] = useState<number | null>(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClick = (internUsername: string) => {
    navigate(`/interns/2024/${internUsername}`);
  };

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
    } else if (
      event.key === "ArrowLeft" &&
      selectedInternIndex !== null &&
      selectedInternIndex > 0
    ) {
      setSelectedInternIndex(selectedInternIndex - 1);
    } else if (
      event.key === "ArrowRight" &&
      selectedInternIndex !== null &&
      selectedInternIndex < internData.length - 1
    ) {
      setSelectedInternIndex(selectedInternIndex + 1);
    }
  };

  const importData = async () => {
    try {
      const data: Intern[] = Object.values(interns).map((intern) => ({
        ...intern
      }));

      setInternData(data);
    } catch (error) {
      navigate("/notFound");
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
    const handleKeyDown = (event: KeyboardEvent) => {
      //@ts-ignore
      handleArrowNavigation(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleArrowNavigation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={styles.landingPage}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleArrowNavigation(event)}
      tabIndex={0}
    >
      <Helmet>
        <meta property="og:title" content="2024 Interns" />
        <meta property="og:description" content="Meet the interns of 2024" />
        <meta property="og:type" content="website" />
      </Helmet>

      {!isMobile &&
        internData.length > 0 &&
        internData.map((intern, index) => {
          const isSelected = index === selectedInternIndex!;
          const positionStyle = calculatePositionStyle(index);

          return (
            <div key={index} className={isSelected ? styles.shake : ""} style={positionStyle}>
              <Link to={`/interns/2024/${intern.username}`}>
                <img
                  src={getAssetPath(`/internAvtar/${intern.username}.svg`)}
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
