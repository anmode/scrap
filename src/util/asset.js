const getAssetPath = (relativePath) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('hllo',relativePath);
      return `https://interns2024.pages.dev/${relativePath}`;
    } else {
      return `/asset/${relativePath}`;
    }
  };
  

  export default getAssetPath;