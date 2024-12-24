export const themeReducer = (initialTheme: string, currentTheme: string) => {
  if (currentTheme) {
    return currentTheme;
  }
  return initialTheme;
};
