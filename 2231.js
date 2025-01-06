const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString();

const n = parseInt(input);

function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    let candidate = i;
    let sum = 0;
    while (candidate > 0) {
      sum += candidate % 10;
      candidate = Math.floor(candidate / 10);
    }
    sum += i;
    if (sum == n) {
      answer = i;
      break;
    }
  }
  return answer;
}
console.log(solution(n));
