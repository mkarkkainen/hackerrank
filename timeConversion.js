// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const timeConversion = (s) => {
  if (s[s.length - 2] === "A" && s[0] === "1" && s[1] === "2") {
    return "00" + s.slice(2, 8);
  } else if (s[s.length - 2] === "P" && s[0] === "1" && s[1] === "2") {
    return s.slice(0, 8);
  } else {
    return s[s.length - 2] === "A"
      ? s.slice(0, 8)
      : String(Number(s.slice(0, 2)) + 12) + s.slice(2, 8);
  }
};
