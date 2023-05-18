let Aluno = [ { 
    Nome: 'Ana',
    Idade: 17,
    Nota: 8,
    Ano: '2°B',

}, { 
    Nome: 'Bruno',
    Idade: 16,
    Nota: 6,
    Ano: '2°C',

}, {
    Nome: 'Veronica',
    Idade: 16,
    Nota: 9,
    Ano: '2°C',

}, {
    Nome: 'Marta',
    Idade: 15,
    Nota: 5,    
    Ano: '3°C',
}, {
    Nome: 'Brenno',
    Idade: 19,
    Nota: 6,    
    Ano: '3°C',
}, {
    Nome: 'Maria',
    Idade: 14,
    Nota: 4,    
    Ano: '1°C',
} ]

console.log(Aluno)
console.log(Aluno[1])
console.log(Aluno[3].Nota)
console.log(JSON.stringify(Aluno))