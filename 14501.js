const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const N = parseInt(input[0]);
const table = [];
let answer = 0;

function talk(){
    for(let i =1;i<=N;i++){
        table.push(input[i].split(" ").map(Number));
    }
    check(0,0);
    return answer;
}

function check(day,money){
    answer = Math.max(answer,money);
    for(let i = day; i<N;i++){
        let [D,M]=table[i];
        let nextDay = i+ D;
        check(nextDay,nextDay<N+1?money + M : money);
    }
}
console.log(talk());