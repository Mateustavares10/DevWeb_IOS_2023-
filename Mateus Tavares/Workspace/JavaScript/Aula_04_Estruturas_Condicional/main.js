let notaMateus = 8
let notaMinima = 7

if(notaMateus >= notaMinima) //verdadeiro
console.log("Voce está aprovado") 
    else {
   console.log("Voce está reprovado ")
}

// impar ou par
// se a sobra da divisão do número por 2 for 1 esse número é par 
// se a sobra desse número do número por 2 for 0 esse é par

let imparPar = 10
if( imparPar % 2 == 1){
    console.log ( "é impar")
}else {
    console.log (" é par")
}

//validação encadeada
//primeira validação 
//segunda validação
//o numero é par e maior que 10

let imparPar2 = 10
if( imparPar2 % 2 == 1){
    console.log ( "é impar")
}else {
    if(imparPar2 > 10) {

        console.log ("Número é par e é maior que 10")
    }else{
        console.log (" O número é par mas é menor que 10")
    }
}


// se é maior que 7 apresenta "aprovado"
//se é menor que 7 apresenta "reprovado"
// se está entre 7 e 5 "aprovado por conselho"

if (6 > 7 ) {
    console.log ("Aprovado")
}else if (8 < 6.9 && 6 > 5){
    console.log ("Aprovado por conselho")
}else{
    console.log("Reprovado")
}

