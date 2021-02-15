let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']

//Exibir vetor
console.log(frutas)

//Tirar o último elemento do vetor
let UltimaFruta = frutas.pop()

console.log(frutas)
console.log(UltimaFruta)

//Tirar o primeiro elemento do vetor
let PrimeiraFruta = frutas.shift()

console.log(frutas)
console.log(PrimeiraFruta)

//Removendo de posições intermediárias
//splice()
//1º parâmetro: posição que será removida (lembre-se que a contagem começa do 0)
//2º parâmentro: quantidade de elementos que serão removidos
let TerceiraFruta = frutas.splice(2, 1) //Fruta na posição 2

console.log(frutas)
console.log(TerceiraFruta)

//Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//Inserir elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

//Inserindo em posição intermediária
//splice() para inserção
//1º parâmetro: a posição onde ocorrerá a inserção
//2º parâmetro: quantos elementos serão excluídos (0)
//Parâmetros seguintes: elementos a serem inseridos

//Inserindo na 4ªposição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

//Inserindo duas frutas na 3ª posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

//Substituindo a 6ª fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)