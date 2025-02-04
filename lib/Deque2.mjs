export class Deque {

    #data
    #head
    #tail

    constructor(){
        this.#data = {} // Objeto vazio
        this.#head = 0 // Início do deque
        this.#tail = -1 // Final do deque
        // console.log(this.#data, this.#head, this.#tail)
    }

    insertFront(val) {
        // Cria uma nova posição à esquerda (no início). Essa posição
        // pode corresponder a um número negativo
        this.#head--
        this.#data[this.#head] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    insertBack(val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    removeFront() {
        if(this.empty) return undefined
        let temp = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    removeBack() {
        if(this.empty) return undefined
        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail--
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peekFront() {
        return this.#data[this.#head]
    }

    peekBack() {
        return this.#data[this.#tail]
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

/*
let deque = new Deque()

deque.insertBack('Júlia')
let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
console.log({primeiro, ultimo})

deque.insertBack('Maria')
deque.insertBack('Yuri')
deque.insertBack('Kátia')

deque.insertFront('Sebastião')

deque.insertBack('Luis')
deque.insertBack('Amanda')

let atendido = deque.removeFront()
console.log({atendido})

atendido = deque.removeFront()
console.log({atendido})

deque.insertFront('Tadeu')
deque.insertFront('Eliana')
deque.insertFront('Juliana')
deque.insertFront('Ulisses')
*/