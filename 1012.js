const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const T = parseInt(input[0]);
const graph=input.map((v) => v.split(" ").map(Number));

let farm = [];
let visit = [];

const row=[0,0,-1,1];
const col=[-1,1,0,0];

function DFS(j,k,N,M){
    visit[j][k] = true;
    for(let i = 0;i<4;i++){
        newJ = j+col[i];
        newK = k+row[i];
        if(newJ >= 0 && newJ<N && newK>=0&& newK < M){
            if(farm[newJ][newK]===1&&visit[newJ][newK]===false){
                DFS(newJ,newK,N,M);
            }
        }
    }
}

for (let i = 0; i < T; i++) {
    let worm = 0;
  
    let [M, N, K] = graph.shift();
    farm = Array.from(Array(N), () => new Array(M).fill(0));
    visit = Array.from(Array(N), () => new Array(M).fill(false));
    while (K > 0) {
      K--;
      const [x, y] = graph.shift();
      farm[y][x] = 1;
    }
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (farm[j][k] === 1 && visit[j][k] === false) {
          DFS(j, k, N, M);
          worm++;
        }
      }
    }
    console.log(worm);
  }