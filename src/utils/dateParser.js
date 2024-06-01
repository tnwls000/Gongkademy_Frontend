export const dateParser = (date) => {
  const [year, mon, day] = [
    Number(date.substr(0, 4)),
    Number(date.substr(4, 2)),
    Number(date.substr(6, 2)),
  ];
  const birthday = new Date(year, mon - 1, day);
  return birthday;
};
