const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const seedMoney = parseInt(input[0]);
const company = input[1].split(" ").map(Number);

let jMoney = seedMoney;
let sMoney = seedMoney;
let jStock = 0;
let sStock = 0;

function Buy(money, price, stock) {
  while (money >= price) {
    stock++;
    money -= price;
  }
  return [money, stock];
}

function Sell(money, price, stock) {
  while (stock > 0) {
    stock--;
    money += price;
  }
  return [money, stock];
}

function JH() {
  for (let i = 0; i < 14; i++) {
    [jMoney, jStock] = Buy(jMoney, company[i], jStock);
  }
  return [jMoney, jStock];
}

function SM() {
  for (let i = 3; i < 14; i++) {
    if (company[i - 3] < company[i - 2] && company[i - 2] < company[i - 1]) {
      [sMoney, sStock] = Sell(sMoney, company[i], sStock);
    }

    if (company[i - 3] > company[i - 2] && company[i - 2] > company[i - 1]) {
      [sMoney, sStock] = Buy(sMoney, company[i], sStock);
    }
  }
}

function answer() {
  const Junhyeon = jMoney + jStock * company[13];
  const Sungmin = sMoney + sStock * company[13];

  if (Junhyeon > Sungmin) {
    return "BNP";
  } else if (Junhyeon < Sungmin) {
    return "TIMING";
  } else {
    return "SAMESAME";
  }
}

JH();
SM();
console.log(answer());
