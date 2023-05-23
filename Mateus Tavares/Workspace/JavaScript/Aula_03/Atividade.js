let fruta1 = " Laranja";
let fruta2 = "Morango";
let fruta3 = "Uva";
let fruta4 = "Manga";
let fruta5 = "Banana";

//length
console.log(`A quantidade de caracteres das frutas é: ${fruta1.length},${fruta2.length},${fruta3.length},${fruta4.length},${fruta5.length}`);

//substring
console.log(`Mostrar os 3 primeiros caracteres: ${fruta1.substring(0,3)},${fruta2.substring(0,3)},${fruta3.substring(0,3)},${fruta4.substring(0,3)},${fruta5.substring(0,3)}`);

//trim
console.log (`Tirar o caracter em branco do inicio: ${fruta1.trim()}`);

//replace e toLowerCase
console.log (`Modo replace e toLowercase: ${fruta1.replace('Laranja', 'Pessêgo'.toLowerCase())},${fruta2.replace ('Morango', 'Manga'.toLowerCase())},${fruta3.replace ('Uva', 'Kiwi'.toLowerCase())},${fruta4.replace ('Manga', 'Amora'.toLowerCase())},${fruta5.replace ('Banana', 'Açai'.toLowerCase())}`);

//template string 
let frutas = "Segue lista de todas as frutas: ";
console.log (`${frutas} ${fruta1},${fruta2},${fruta3},${fruta4},${fruta5}`)