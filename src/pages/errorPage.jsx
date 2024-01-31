// errorPage.jsx
const ErrorPage = () => {

  console.log("deploy check");
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Something went wrong.</h1>
      <p style={styles.message}>
        The page you are looking for doesn't exist.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  message: {
    fontSize: '1.2em',
    marginBottom: '20px',
    color: '#555',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default ErrorPage;
