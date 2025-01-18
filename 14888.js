const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().split("\n");
const N = parseInt(input[0]);
const An = input[1].split(" ").map(Number);
const cal = input[2].split(" ").map(Number);

const calculator = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => parseInt(a / b),
  ];

function calculate() {
  let Max = Number.MIN_SAFE_INTEGER;
  let Min = Number.MAX_SAFE_INTEGER;

  function dfs(count, result) {
    if (count === N - 1) {
      Max = Math.max(Max, result);
      Min = Math.min(Min, result);
      return;
    }

    for (let i = 0; i < cal.length; i++) {
      if (cal[i] === 0) continue;

      cal[i]--;
      dfs(count + 1, calculator[i](result, An[count + 1]));
      cal[i]++;
    }
  }
dfs(0, An[0]);
return [Max,Min];
}
const answer = calculate();
if (answer) {
  console.log(answer.join("\n"));
}