function getDayName(dateString) {
  const arrDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString).getDay();
  return arrDay[date];
}

console.log(getDayName("10/11/2009"));
