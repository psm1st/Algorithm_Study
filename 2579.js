const fs = require("fs");
const input=fs.readFileSync(0,"utf8").toString().split("\n").map(Number);
const N = input[0];
const stair = new Array(N+1).fill(0);
function game(){
    stair[1] = input[1];
    stair[2]=stair[1]+input[2];
    stair[3] = Math.max(input[1]+input[3],input[2]+input[3]);

    for(let i = 4; i<=N;i++){
        stair[i] = Math.max(input[i-1]+input[i]+stair[i-3],stair[i-2]+input[i])
    }
    return stair[N];
}

console.log(game());
