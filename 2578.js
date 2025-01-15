const fs = require("fs");
const input = fs.readFileSync(0,"utf8").toString().trim().split("\n");
const board=[];
const Bingo = Array.from({length:5},()=>Array(5).fill(0));
const num = [];

for (let i = 0; i<5;i++){
    board.push(input[i].trim().split(" ").map(Number));
}
for(let i = 5; i<10;i++){
    num.push(input[i].trim().split(" ").map(Number));
}
function BingoCross(){
    let bingo = 0;
    if(Bingo[0][0] && Bingo[1][1] && Bingo[2][2]&& Bingo[3][3]&& Bingo[4][4] ){
        bingo++;
    }
    if(Bingo[0][4]&&Bingo[1][3]&&Bingo[2][2]&&Bingo[3][1]&&Bingo[4][0]){
        bingo++;
    }
    return bingo;
}
function BingoLine(){
    let bingo=0;
    for(let i = 0; i<5;i++){
     if( Bingo[i][0]&&Bingo[i][1]&&Bingo[i][2]&&Bingo[i][3]&&Bingo[i][4]){
        bingo++;
    }
    if(Bingo[0][i]&&Bingo[1][i]&&Bingo[2][i]&&Bingo[3][i]&&Bingo[4][i]){
        bingo++;
    }  
    }

    return bingo;
}
function BingoCheck(){
    for(let i =0; i<5;i++){
        for(let j=0 ; j<5;j++){
            let now=num[i][j];
            board.forEach((row, rowIndex) => {
                row.forEach((value, colIndex) => {
                    if (value === now) {
                        Bingo[rowIndex][colIndex] = 1; 
                    }
                });
            });
            let Bingocross = BingoCross();
            let Bingoline = BingoLine();            
            if(Bingocross + Bingoline >=3){
                return i*5 +(j+1);
            }
        }
    }
    return -1;
}
console.log(BingoCheck());