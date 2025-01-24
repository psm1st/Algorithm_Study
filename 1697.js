const fs = require("fs");
const [N,K]=fs.readFileSync(0,"utf8").toString().trim().split(" ").map(Number);

function BFS(start,target){
    const queue =[[start,0]];
    const visit = new Array(100001).fill(false);
    visit[start]=true;

    while(queue.length){
        const [curr,time]=queue.shift();
        if(curr===target){
            return time;
        }
        for(const next of [curr-1,curr+1,curr*2]){
            if(next>=0&&next<=100000&&visit[next]===false){
                visit[next]=true;
                queue.push([next,time+1]);
            }
        }
    }
}

console.log(BFS(N,K));