// Determine if string1 and string2 share common substring string3;

const twoStrings = (s1, s2) => {
  let key = "";
  let text = "";
  let result = [];
  s1.length > s2.length ? ((key = s2), (text = s1)) : ((key = s1), (text = s2));
  key.split(""), text.split("");
  for (let i = 0; i < key.length; i++) {
    for (let y = 0; y < text.length; y++) {
      if ((key[i] = text[y])) {
        result.push(text[y]);
      }
    }
  }
  return result;
};

const compareStrings = (s1, s2) => {
  let key = "";
  let text = "";
  s1 > s2 ? ((key = s2), (text = s1)) : ((key = s1), (text = s2));
  key.split(""), text.split("");
  for (let i = 0; i < key.length; i++) {
    let regex = new RegExp("[" + key[i] + "]");
    if (regex.test(text)) {
      return "YES";
    }
  }
};

// BETTER SOLUTION
const twoStringsSolved = (s1, s2) => {
  for (let letter of s1) {
    if (s2.includes(letter)) {
      return "YES";
    }
  }
  return "NO";
};
