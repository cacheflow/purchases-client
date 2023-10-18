const toHumanizedDate = (date: string): any => {
  const dateParts = date.slice(0, -1).split('T');
  const dateStr = dateParts[0].split('-');
  const d = dateStr.map(d => parseInt(d));
  let year = d[0];
  let month = d[1];
  let day = d[2];
  const humanizedDate = new Date(Date.UTC(year, --month, day))

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(humanizedDate);
}

export default toHumanizedDate;