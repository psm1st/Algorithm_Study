const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().split("\n");
const [N,S,M]=input[0].split(" ").map(Number);
const V = input[1].split(" ").map(Number);
let answer = -1; 
const dp = Array.from(Array(N+1),()=>Array(M+1).fill(0));

dp[0][S]=1;
for(let i =1; i<N+1;i++){
    for(let P = 0; P<=M;P++){
        if(dp[i-1][P]){
            if(P-V[i-1]>=0)dp[i][P-V[i-1]]=1;
            if(P+V[i-1]<=M)dp[i][P+V[i-1]]=1;
        }
    }
}

for(let i = 0; i<=M;i++){
    if(dp[N][i])answer=Math.max(answer,i);
}
console.log(answer);
