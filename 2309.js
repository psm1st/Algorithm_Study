const fs = require("fs");
const heights = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function snowwhite() {
  const totalSum = heights.reduce((total, now) => total + now, 0);

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (totalSum - heights[i] - heights[j] === 100) {
        return heights.filter((_, index) => index !== i && index !== j);
      }
    }
  }
  return null;
}

const result = snowwhite();
if (result) {
  console.log(result.sort((a, b) => a - b).join("\n"));
}
