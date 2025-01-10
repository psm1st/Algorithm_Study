const fs = require("fs");
const now = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const NM = now.shift().split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

function square() {
  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let limit = Math.min(N - i, M - j);
      for (let k = 0; k < limit; k++) {
        if (
          now[i][j] === now[i][j + k] &&
          now[i][j] === now[i + k][j] &&
          now[i][j] === now[i + k][j + k]
        ) {
          result = Math.max(result, k + 1);
        }
      }
    }
  }
  return result;
}
const Square = square();
console.log(Square ** 2);
