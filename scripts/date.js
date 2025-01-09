export function isWeekend(date) {
  let dateFormatted = date.format("dddd").toLowerCase();
  return dateFormatted === "saturday" || dateFormatted === "sunday";
}

export default isWeekend;
