export const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  const diffInMs = today.getTime() - start.getTime();

  // 365.25 to account for leap years
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  return Number(years.toFixed(1)); // example: 4.2
};