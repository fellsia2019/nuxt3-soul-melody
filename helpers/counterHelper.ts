export const counterHelper = (index: number) => {
  return index + 1 < 10 ? `0${index + 1}` : index + 1;
};
