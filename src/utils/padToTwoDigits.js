export const padToTwoDigits = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};
