const texto = "Socorram-me, subi no ônibus em Marrocos"

// Usando um vetor como pilha
const pilha = []

// Desmontando o texto e colocando cada letra na pilha
for(let i = 0; i < texto.length; i++) {
    //Na pilha, a inserção sempre ocorre no final
    pilha.push(texto.charAt(i))
}

//pilha.unshift('X', 'Y', 'X') // Insere no início (operação proibida em uma pilha)
//pilha.splice(14, 0, '9', '8', '7') // Insere no meio (também proibida para pilhas)
pilha.splice(22, 7) // Exclusão no meio da pilha (proibido!)
console.log(pilha)

let textoReV = ''

while(pilha.length){
    // Na pilha, a retirada é sempre feita também no final
    textoReV += pilha.pop()
}
console.log(textoReV)