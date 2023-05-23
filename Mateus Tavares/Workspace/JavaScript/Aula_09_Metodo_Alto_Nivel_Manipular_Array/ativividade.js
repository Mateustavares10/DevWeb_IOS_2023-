let ativiade1 = [17, 43, 8, 4, 97, 56, 29]
function atividadefuncao (item) {
    if (item % 2 == 0) {
        console.log(`número par ${item}`)
    } else {
        console.log(`número impar ${item}`)
    }

}
ativiade1.forEach(atividadefuncao)


console.log(`------------------------------------`)

const atividade2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82]
let filtroatividadee2 = atividade2.filter((Number) => {
    return Number >= 20 && Number <= 80
})
 console.log(filtroatividadee2)