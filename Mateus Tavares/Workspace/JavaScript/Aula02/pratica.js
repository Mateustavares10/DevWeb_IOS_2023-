// concatenar Strings
var texto1 = "Aula 02 JS - teste"

var texto2 = "Aula" + '02 JS' + "- teste"

//console.log é para aparecer a informação no inspecionar (f12)

// Informação na mesma linha
console.log(texto1 + texto2)

//limpar informação
console.clear ()

// Caracter de escape
var sober = "Tão natural quanto a luz do diA Mas que preguiça boa Mas também  \n quero te mostrar A gente nunca sabe quem são essas pessoas"


//nan

var zerobyzero = 0 / 0 

console.log(zerobyzero)

// valor 0

var num1 = 8 * null
console.log(num1)

//string e numero

var num2 = "5" + 1
console.log(num2)


console.clear()


//operadores aritméticos
var ovo1 = 5
var ovo2 = 4

//adição
var adicao = ovo1 + ovo2
console.log (adicao)

//subtração
var subtracao = ovo1 - ovo2
console.log (subtracao)

//divisão
var divisao = ovo1 / ovo2
console.log ("Resultado da divisão: " + divisao) // aqui está colando um texto antes do resultado

//multiplicação
var multiplicao = ovo1 * ovo2

console.log (multiplicao)


console.clear()

//precedência dos operadores (qual soma primeiro)
// () / * + -

var numero3 = (6 + 5) / 4 + 6
console.log (numero3)


//operadores de comparação (relacionais)
var compara = ovo1 < ovo2 // false (falso)
console.log (compara)

var compara2 = ovo1 > ovo2 // true (verdadeiro)
console.log (compara2)

//terceiro tipo comparação (se o valor é igual)

var compara3 = ovo1 == ovo2 // false (falso)
console.log (compara3)

//Operadores lógicos
var variavel1 = 3
var variavel2 = 3
var comparaTudo = variavel1 <= variavel2 && variavel1 < variavel1
console.log 


