export const padToTwoDigits = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const padToThreeDigits = (number) => {
  return number < 10
    ? `00${number}`
    : number < 100
    ? `0${number}`
    : `${number}`;
};
