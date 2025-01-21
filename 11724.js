const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().split("\n");
const [N,M] = input[0].split(" ").map(Number);

let graph = Array(N+1);
for(let i = 0; i<graph.length;i++){
    graph[i]=[];
}

for(let i = 1; i<=M;i++){
    let[from,to]=input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

const DFSvisit = new Array(N+1).fill(false);
let Danswer = 0;

function DFS(start){
    DFSvisit[start]=true;
    for(const V of graph[start]){
        if(DFSvisit[V]===false){
            DFS(V);
        }
    }
}
for(let i =1;i<=N;i++){
    if (DFSvisit[i]===false){
        DFS(i);
        Danswer++;
    }
}
console.log(Danswer);