export const parseMilliseconds = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;
  return { hours, minutes, seconds, milliseconds };
};

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
