const fs = require("fs");
const N = Number(fs.readFileSync(0,"utf8").toString().trim());
const dp = new Array(N+1);

function one(){
    dp[1] = 0;
    for(let i = 2; i<=N;i++){
        if(i%2===0){
            dp[i]=Math.min(dp[i-1]+1,dp[i/2]+1);
        }
        if(i%3===0){
            dp[i]=Math.min(dp[i-1]+1,dp[i/3]+1);
        }
        if(i%3===0&&i%2===0){
            dp[i]=Math.min(dp[i-1]+1,dp[i/2]+1,dp[i/3]+1);
        }
        if(i%2!==0&&i%3!==0){
            dp[i]=Math.min(dp[i-1]+1);
        }
    }
    return dp[N];
}
console.log(one());