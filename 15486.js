const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const N = parseInt(input[0]);
const T = [];
const P = [];
const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    const [time, pay] = input[i].split(" ").map(Number);
    T.push(time);
    P.push(pay);
}

for (let i = N - 1; i >= 0; i--) {
    if (i + T[i] <= N) {
        dp[i] = Math.max(dp[i + 1], dp[i + T[i]] + P[i]);
    } else {
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]);
