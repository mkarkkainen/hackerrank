// Print a staricase of size n using # symbols and spaces
// Example: n = 4,
//    #
//   ##
//  ###
// ####

const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
  }
};
