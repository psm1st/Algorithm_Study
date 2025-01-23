const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().split("\n");

const N = parseInt(input[0]);
const graph = input.slice(1).map((v) => v.split("").map(Number));

const apt = [];
let visit = Array.from(Array(N), () => Array(N).fill(false)); 

const row = [0, 0, -1, 1];
const col = [-1, 1, 0, 0];

let CountHome = 0;
let CountComplex = 0;

function DFS(x, y) {
    visit[x][y] = true; 
    CountHome++; 

    for (let i = 0; i < 4; i++) {
        const newX = x + row[i];
        const newY = y + col[i];
        if (
            newX >= 0 &&
            newX < N &&
            newY >= 0 &&
            newY < N &&
            visit[newX][newY]===false &&
            graph[newX][newY] === 1
        ) {
            DFS(newX, newY);
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1 && visit[i][j]===false) {
            CountHome = 0; 
            DFS(i, j); 
            CountComplex++; 
            apt.push(CountHome); 
        }
    }
}

console.log(
    CountComplex + "\n" + apt.sort((a, b) => a - b).join("\n")
);