const getAssetPath = (relativePath: string): string => {
  if (process.env.NODE_ENV === "development") {
    return `https://interns2024.pages.dev/assets${relativePath}`;
  } else {
    return `/asset/${relativePath}`;
  }
};

export default getAssetPath;
