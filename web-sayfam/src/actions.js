export const DARK_MODE = "dark mode geçiş";

export const showData = (item) => {
  return {
    type: DARK_MODE,
    payload: item,
  };
};
