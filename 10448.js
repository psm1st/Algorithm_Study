const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split("\n");
const n = parseInt(input[0]);
const nums = input.slice(1, n + 1).map(Number);

function Eureka() {
  let tri_list = [];
  for (var i = 1; i < 45; i++) {
    tri_list.push((i * (i + 1)) / 2);
  }

  let results = [];
  for (i of nums) {
    let isEureka = 0;
    for (one of tri_list) {
      for (two of tri_list) {
        for (three of tri_list) {
          if (one + two + three === parseInt(i)) {
            isEureka = 1;
            break;
          }
        }
        if (isEureka === 1) break;
      }
      if (isEureka === 1) break;
    }
    results.push(isEureka);
  }

  return results;
}
const answer = Eureka();
if (answer) {
  console.log(answer.join("\n"));
}
