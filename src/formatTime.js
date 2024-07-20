

export const formatTime = (time) => {
  const getSeconds = (time) => time % 60
  const getMinutes = (time) => Math.floor((time % 3600) / 60);
  const getHours = (time) => Math.floor(time / 3600)



  const pad = (num) => (num < 10 ? `0${num}` : num);

  // Return the formatted time string
  return `   ${pad(getHours(time))} : ${pad(getMinutes(time))} : ${pad(getSeconds(time))}`;
};
