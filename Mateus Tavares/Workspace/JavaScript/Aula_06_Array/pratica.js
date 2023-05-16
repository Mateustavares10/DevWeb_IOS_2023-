//array Unidimensional

let mateus = [171,"teste",true, 251.5]
//true posição = 0 
//teste posição = 1
//true posição = 2 
//251.5 posição = 3

console.log (mateus[2])
console.clear()


//array bidimensional

let turma = [
    ["turma 1", "Gabriel", 7],
    ["turma 1", "Carina", 8],
    // 0          1       2
    ["turma 1", "mateus", 9]
]
    console.log (turma [1][1]) //ele irá mostrar a posição 1 e posição 1 do array  que seria ("Carina")
    console.clear()

//alteração do array

let array1 = ["maça", "morango", "uva", "kiwi"]
console.log(array1);
array1 [1] = "pera"; //alteraçao do valor da array
console.log(array1.toString());

//metodos do array//

//convertendo array em uma string 

let texto = "jonattan é o mais idiota da turma"
console.log(texto.toLowerCase) //variavel.toString() ele vai tranformar tudo em uma string

//metedo join 
let atrasados = ["japonego", "abraao", "jonattan", "eric"]
console.log(atrasados.join('*'))  //vai trocar a "," por "*"

//tamanho array
console.log(atrasados.length)

//inserir e remover elemento do array
let atrasados2 = atrasados.pop()    //variavel.pop () vai retirar o ultimo valor do seu array
console.log(atrasados2)
console.log(atrasados)

let atrasado2min = atrasados.push("Fequer")  //variavel.push("a palavra") vai adicionar uma palavra ao seu array, ela vai ser a ultima palavra 
console.log(atrasado2min)
console.log(atrasados)


let atrasada3min = atrasados.shift() //variavel.shift() ele retia a primeira palavra
console.log(atrasada3min)
console.log(atrasados)

let outroatrasado = atrasados.unshift("Mateus") // variavel.unshift ("Mateus")vai adicionar como a primeira palavra no array
console.log(outroatrasado)
console.log(atrasados)

delete atrasados [2]
console.log(atrasados)