/*
    ESTRUTURA DE DADOS DEQUE
    Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
        de inserção e retirada em QUALQUER UMA de duas pontas. Em outras palavras,
        inserção pode acontecer tanto no iníicio quanto no final, e a retirada também
        pode ser feita em ambas as extremidades.
    - Como consequência, o deque não funciona nem pelo FIFO nem pelo LIFO.
    - A principal aplicação do deque é o gerenciamento de filas com atendimento
    prioritário e desistência no final da fila.
*/
export class Deque {

    #data

    constructor() {
        this.#data = [] // Vetor vazio
    }

    insertFront(val){
        this.#data.unshift(val)
    }

    insertBack(val) {
        this.#data.push(val)
    }

    removeFront() {
        return this.#data.shift()
    }

    removeBack() {
        return this.#data.pop()
    }

    peekFront() {
        return this.#data[0]
    }

    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    print() {
        return JSON.stringify(this.#data)
    }

    get empty() {
        return this.#data.length === 0
    }
}