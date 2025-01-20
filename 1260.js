const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().split("\n");
const [N,M,V] = input[0].split(" ").map(Number);
let graph = Array(N+1);
for(let i = 0; i<graph.length;i++){
    graph[i]=[];
}

for(let i = 1; i<=M;i++){
    let[from,to]=input[i].split(" ").map(Number);
    graph[from][to] = 1;
    graph[to][from]=1;
}

const DFSvisit = new Array(N+1).fill(false);
const Danswer = [];
const BFSvisit = new Array(N+1).fill(false);
const Banswer = [];

function DFS(V){
    DFSvisit[V]=true;
    Danswer.push(V);
    for(let i =1;i<graph.length;i++){
        if(graph[V][i] === 1 && DFSvisit[i]===false){
            DFS(i);
        }
    }
}

function BFS(V){
    BFSvisit[V]=true;
    Banswer.push(V);
    const queue =[];
    queue.push(V);

    while(queue.length !== 0){
        let dequeue = queue.shift();
        for(let i =1;i<graph.length;i++){
            if(graph[dequeue][i]===1&&BFSvisit[i]===false){
                BFSvisit[i]=true;
                queue.push(i);
                Banswer.push(i);
            }
        }
    }
}

DFS(V);
BFS(V);

console.log(Danswer.join(" "));
console.log(Banswer.join(" "));