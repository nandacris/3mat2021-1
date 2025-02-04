/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

// Usaremos a estrutura pilha
import { Stack } from './lib/Stack.mjs'

const numDecimal = 2021 // 10000 em binário

let num = numDecimal

const restos = new Stack()

while(num > 0) {
    restos.push(num % 2) // Empilha o resto da divisão do número por 2
    // Corta o número pela metade, desprezando as casas decimais
    num = Math.floor(num / 2)
}

console.log(restos.print())

let binario = ''

while(! restos.empty) {
    binario += restos.pop()
}

console.log(`${numDecimal} em base 10 equivale a ${binario} em base 2.`)