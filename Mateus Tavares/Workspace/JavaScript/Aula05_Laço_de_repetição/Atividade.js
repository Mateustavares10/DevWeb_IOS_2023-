
//While
let numero = 1;
while (numero <= 50) {
    console.log(`Número = ${numero}`);
    numero++;
    console.log()
}

//Do-while

let mateus = 10,
    ios = "";
do  {
    ios += `Contagem ${mateus}\n`;
    mateus--;
} while (mateus >=0);
console.log(ios)

//for

for (let a = 1; a <= 100; a++) {
    if( a % 2 == 0) {console.log(a)}
}