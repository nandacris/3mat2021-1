// Função de cálculo do fatorial

// O fatorial de um número é igual a ele próprio multiplicado
// por todos os seus antecessores até o 1

// 5! = 5 * 4 * 3 * 2 * 1 (120)
// 4! = 4 * 3 * 2 * 1 (24)

// Função de cálculo do fatorial, pelo método ITERATIVO
function fatorial1(n) {
    let res = 1
    for(let i = n; i > 1; i--) res *= i // res = res * 1
    return res
}

console.log(fatorial1(5))
console.log(fatorial1(4))

// 5! = 5 * 4 * 3 * 2 * 1 (120)
// 4! = 4 * 3 * 2 * 1 (24)
// 5! = 5 * (4!)
// 5! = 5 * ((5 - 1)!)
// n! = n * ((n - 1)!)
// 1! = 1
// 0! = 1

// Função de cálculo do fatorial, pelo método RECURSIVO
function fatorial2(n){
    console.log({n})
    if(n <= 1) return 1      // Condição de parada ou de saída
    else return n * fatorial2(n - 1)
}

console.log(fatorial2(5))
console.log(fatorial2(4))