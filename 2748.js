const fs = require("fs");
const N = Number(fs.readFileSync(0,"utf8").toString().trim());
const F = new Array(N+1).fill(0n);
function fibonacci(){
    F[0]=0n;
    F[1]=1n;
    for(let i = 2; i<=N;i++ ){
        F[i]=F[i-1]+F[i-2];
    }
    return F[N];
}
console.log(fibonacci().toString());