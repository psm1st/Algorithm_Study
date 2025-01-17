const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const N = parseInt(input[0]);
const table = input.slice(1).map(line => line.split(" ").map(Number));
let answer = Number.MAX_SAFE_INTEGER;

function team(){
    const visit = Array(N).fill(false);
    check(0,0,visit);
    return answer
}

function check(member, start, visit){
    if(member === N/2){
        let startTeam = 0;
        let linkTeam = 0;
        for(let i =0;i<N;i++){
            for(let j = 0 ; j < N; j++){
                if(visit[i]&&visit[j]){
                    startTeam += table[i][j];
                }else if(!visit[i]&&!visit[j]){
                    linkTeam += table[i][j];
                }
            }
        }
        answer = Math.min(answer,Math.abs(startTeam-linkTeam));
    }
    for(let i = start; i < N ; i++){
        if(!visit[i]){
            visit[i]=true;
            check(member+1 , i+1, visit)
            visit[i]=false;
        }
    }
}
console.log(team());