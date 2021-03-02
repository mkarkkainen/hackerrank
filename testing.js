let x = [2, 5, "a", true, -3, "lard", {}, "", 35];

let xx = x.filter((x) => typeof x === "string");

console.log(xx);
