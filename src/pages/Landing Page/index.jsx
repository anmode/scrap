import styles from './index.module.css';
import svg from '../../assets/background.svg'
import svg2 from '../../assets/welcome-to_hackerspace.svg'

const LandingPage = () => {
  return (
    <>
      <div>
        <div style={{ "background-image": `url(${svg})` }} className={styles.landingPage }>
          <img src={svg2} className={styles.landingPageWelcomeImage} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
