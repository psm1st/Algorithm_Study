const fs = require("fs");
const [N, K] = fs.readFileSync(0,"utf8").toString().trim().split(" ").map(Number);

function BFS(start, target) {
    const queue = [[start, 0]];
    const visit = new Array(100001).fill(Infinity);
    const answer = new Array(100001).fill(0);
    visit[start] = 0;
    answer[start] = 1;

    while (queue.length) {
        const [curr, time] = queue.shift();

        for (const next of [curr - 1, curr + 1, curr * 2]) {
            if (next >= 0 && next <= 100000) {
                if (visit[next] > time + 1) {
                    visit[next] = time + 1;
                    queue.push([next, time + 1]);
                    answer[next] = answer[curr];
                } else if (visit[next] === time + 1) {
                    answer[next] += answer[curr];
                }
            }
        }
    }
    return [visit[target], answer[target]];
}

const [minTime, ways] = BFS(N, K);
console.log(minTime);
console.log(ways);