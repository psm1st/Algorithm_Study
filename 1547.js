const fs = require("fs");
const cup = fs.readFileSync(0, "utf8").toString().split("\n");
const num = parseInt(cup[0]);

function Change(cup, result) {
  let [cup1, cup2] = cup.toString().trim().split(" ");
  if (cup1 == result) {
    result = cup2;
  } else if (cup2 == result) {
    result = cup1;
  }
  return result;
}

function Ball() {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (i >= cup.length || !cup[i]) {
      return -1;
    }
    result = Change(cup[i], result);
  }
  return result <= 0 ? -1 : result;
}
console.log(Ball());
