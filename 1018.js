const fs = require("fs");
const list = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const NM = list.shift().split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

const blackChess = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const whiteChess = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const board = list.map((line) => line.split(""));

function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== whiteChess[i - y][j - x]) {
        checkWhite++;
      }
      if (board[i][j] !== blackChess[i - y][j - x]) {
        checkBlack++;
      }
    }
  }
  return Math.min(checkWhite, checkBlack);
}

function Chess() {
  let min = Infinity;
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      const result = check(j, i);
      if (result < min) {
        min = result;
      }
    }
  }
  return min;
}

console.log(Chess());
