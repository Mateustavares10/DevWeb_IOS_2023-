let atividade = [
    'HTML',
    1993,
    'CSS',
    1996,
    'Bootstrap',
    2011,
    'JS',
    1995,
    'React',
    2013,
    'Java',
    1995,
];
console.log(atividade);
console.log(atividade.length);
console.log(atividade[6]);
console.log(atividade.toString());
console.log(atividade.join('/'));
console.log(atividade.unshift('IOS'));
console.log(atividade);

let SegundaAtividade = [
    ['HTML', 1993, 'CSS', 1996],
    ['Bootstrap', 2011, 'JS', 1995],
    ['React', 2013, 'Java', 1995],
];

console.log(SegundaAtividade)
console.log(SegundaAtividade[2][1])
SegundaAtividade[1][2] = "JavaScript"
console.log(SegundaAtividade)
delete SegundaAtividade [2][2]
console.log(SegundaAtividade);

let SegundaAtividade2 = SegundaAtividade[2].push("Pipoca")
console.log(SegundaAtividade2)
console.log(SegundaAtividade)