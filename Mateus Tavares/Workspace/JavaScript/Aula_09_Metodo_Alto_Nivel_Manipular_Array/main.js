// Método forEach() // ele serve para correr entre o array.

const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);
function minhaFuncao(valor, posicao) {
    /// (parametro; o primeiro (valor) é o valor e o segundo (posição) é a posição do array
    console.log(`valor: ${valor}`);
    console.log(`posicao: ${posicao}`);
}

console.log(`----------------------------------------------`);
////-------------------------------------------------////

///o primeiro item di foreach(( valor = vai ser o apple)) sempre vai ser o valor

// Método forEach() com Arrow Function
//como utilizar => { }

console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((valor, posicao) => {
    console.log(`valor: ${valor}`);
    console.log(`posicao: ${posicao}`);
});

console.log(`-------------------------------------------`);
// forEach() com array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto)); /// foi feito com Arrow Function =>
/// ele está percorrendo dentro do array de objeto, mostrando apenas o valor texto

console.log(`-----------------------------`);

/// método map()  ele cria um novo array, uma cópia do identifica ao seu array.

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt); ////aqui ele está retornando a raiz quadrada de cada número.
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText);

console.log(`----------------------`);

// Método filter   (voce filtra o que quer buscar da nova array)
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);
console.log('array original');
console.log(idades);
console.log('array modificado');
console.log(filtroIdade);

console.log(`-------------------------------------`);

// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

console.log(`---------------------------------------------`);

// Método find()
console.clear();
const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];
console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);
