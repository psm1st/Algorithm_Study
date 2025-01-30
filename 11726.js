const fs = require("fs");
const N = Number(fs.readFileSync(0,"utf8").toString().trim());
const dp = new Array(N+1);

function tile(){
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3 ; i<=N; i++){
        dp[i] = (dp[i-1] + dp[i-2])%10007;
    }
    return dp[N];
}

console.log(tile());