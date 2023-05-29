// JavaScript e DOM
// objeto document
console.log(document);
// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
// Alterar o título
document.title = "testeeee";


///// exemplo de usuário em formulario
let nomeusuario = "Mateus";

if(nomeusuario === "Mateus") {
    let heading = document.createElement('H1');
    heading.innerHTML = 'Olá Mateus!';
    document.body.appendChild(heading);
} else{
    let heading = document.createElement('H1');
    heading.innerHTML = 'Olá alunos!';
    document.body.appendChild(heading);
}


// Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!';   ///innerHTML ele vai inserir a informação no html. 
document.body.appendChild(heading); /// aqui vai mostrar a informação no body, appendChild é acrescentar na tag filho e dentro do () é a variavel que criou no inicio.

