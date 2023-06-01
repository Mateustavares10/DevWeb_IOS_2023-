/////Alterando a cor do h1 com getElementById
let Titulo = document.getElementById('Titulo');
Titulo.style.backgroundColor = 'yellow';


// Método getElementsByClassName
let marcas = document.getElementsByClassName('marca');
marcas[1].style.fontWeight = 'bold';

//Método GetElementsByName
let li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
if (i % 2) li[i].style.backgroundColor = 'yellow';
else li[i].style.backgroundColor = '#fff';
}

// Método getElementsByName

marcas[0].style.borderBottom = '5px solid '
marcas[1].style.borderBottom = '5px solid '
marcas[2].style.borderBottom = '5px solid '
marcas[3].style.borderBottom = '5px solid '
marcas[4].style.borderBottom = '5px solid '
marcas[5].style.borderBottom = '5px solid '

// Remover elemento com remove
let remove = document.getElementById('remove');
remove.remove();

// Remove elemento do DOM
let item2 = document.getElementById('item2');

// Retornando o elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(remove, item1.nextSibling);
