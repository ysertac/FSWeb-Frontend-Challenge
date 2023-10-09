export const SHOW_DATA = "veri göster";

export const showData = (item) => {
  return {
    type: SHOW_DATA,
    payload: item,
  };
};
