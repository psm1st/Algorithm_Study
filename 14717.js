const fs = require("fs");
const mine = fs.readFileSync(0, "utf8").toString().split(" ").map(Number);

function getRank(card1, card2) {
  if (card1 === card2) return `${card1}땡`;
  const sum = (card1 + card2) % 10;
  return `${sum}끗`;
}

function compareRank(myRank, opponentRank) {
  const ranks = [
    "10땡",
    "9땡",
    "8땡",
    "7땡",
    "6땡",
    "5땡",
    "4땡",
    "3땡",
    "2땡",
    "1땡",
    "9끗",
    "8끗",
    "7끗",
    "6끗",
    "5끗",
    "4끗",
    "3끗",
    "2끗",
    "1끗",
    "0끗",
  ];
  const myIndex = ranks.indexOf(myRank);
  const opponentIndex = ranks.indexOf(opponentRank);
  return myIndex < opponentIndex;
}

function win() {
  let card = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
  const first = mine[0];
  const second = mine[1];
  card.splice(card.indexOf(first), 1);
  card.splice(card.indexOf(second), 1);

  const myRank = getRank(first, second);

  let winCount = 0;

  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      const opponentRank = getRank(card[i], card[j]);

      if (compareRank(myRank, opponentRank)) {
        winCount++;
      }
    }
  }
  const totalCase = (card.length * (card.length - 1)) / 2;
  const winProbability = winCount / totalCase;

  return winProbability.toFixed(3);
}

console.log(win());
