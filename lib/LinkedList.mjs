/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
        de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
        informação e a outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
        se encontram todos os nodos da lista. Sabemos apneas onde está o
        primeiro e o úçtimo nodo da sequência. Os nodos intermediários precisam
        ser encontrados partindo-se do primeiro e percorrendo a sequência.
*/

class Node {
    constructor(val) {
        this.data = val
        this.next = null // O nodo não tem sucessor (é o último)
    }
}

export class LinkedList {
    #head  // Primeiro nodo da estrutura
    #tail // Último nodo da estrutura
    #count // Número de nodos da estrutura

    constructor() {
        this.#head = null // Não tem nodo no início
        this.#tail = null // Não tem nodo no fim
        this.#count = 0 // Lista vazia
        //console.log(this.#head, this.#tail, this.#count)
    }

    get empty() {
        return this.#count === 0
    }

    // Inserção no final da lista
    insertTail(val) {
        this.insert(this.#count, val)
        /*  // Criação do nodo
        const node = new Node(val)

        // Se a lista estiver vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        else {
            // O último nodo passa a apontar para o novo nodo
            this.#tail.next = node 
            // O novo nodo passa a ser o último
            this.#tail = node
        }
        this.#count++ 

        //console.log(this.#head, this.#tail, this.#count) */

    }

    // Inserção no início da lista
    insertHead(val) {
        this.insert(0, val)

        /* // Criação no novo nodo com a informação a ser inserida
        const node = new Node(val)

        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        else {
            node.next = this.#head
            this.#head = node
        }
        this.#count++

        //console.log(this.#head, this.#tail, this.#count) */

    }

    // Inserção em qualquer posição
    insert(pos, val) {

        // pos não pode ser negativo
        if(pos < 0) return // Sai sem fazer nada

        const node = new Node(val)

        // Lista está vazia 
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        // Inserção no in[icio ]
        else if(pos === 0) {
            node.next = this.#head
            this.#head = node
        }
        // Se pos for maior ou igual ao número de elementos da lista,
        // inserimos no final
        else if (pos >= this.#count){
            this.#tail.next = node
            this.#tail = node
        }
        else {

            // Em uma inserção posicional, é necessário, primeiramente,
            // encontrar o nodo da posição ANTERIOR à posição de inserção
            let prev = this.#head // Nodo anterior à posição de inserção
            for(let i = 0; i < pos - 1; i++){
                prev = prev.next // Percurso da lista até a posição desejada
            }
            let next = prev.next

            // O novo modo passa a ser o next do nodo anterior (prev)
            prev.next = node
            // O próximo do novo nodo deve ser o next
            node.next = next
        }
        this.#count++

        //console.log(this.#head, this.#tail, this.#count)
    }

    remove(pos) {

        if(pos < 0 || pos >= this.#count) return undefined // Não faz nada
        let removed

        // Remoção no início da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = removed.next
        }
        /*
        if empty, do nothing

        Vertex pre = head

        for (k = 0; k < i-1; k++)

        pre = pre.next

        Vertex del = pre.next, aft = del.next

        pre.next = aft // bypass del

        delete del
        */
       else {
           let prev = this.#head
           for(let i = 0; i < pos - 1; i++) prev = prev.next
           removed = prev.next
           let next = removed.next
           prev.next = next
           
           if(pos === this.#count - 1) this.#tail = prev
       }
       this.#count--

        return removed.data
    }
    removeHead() { // Atalho para remoção do primeiro elemento
        return this.remove(0)
    }

    removeTail() { // Atalho para remoção do último elemento
        return this.remove(this.#count - 1)
    }

    peek(pos) {

        // 1º caso: Lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos >= this.#count) return undefined

        // 2º caso: posição é o início dalista
        if(pos === 0) {
            return this.#head.data
        }
        // 3º caso: posição é a do último elemento da lista
        else if(pos === this.#count - 1){
            return this.#tail.data
        }
        // 4º caso: posição intermadiária
        else {
            let peeked = this.#head
            for(let i = 0; i < pos; i++) peeked = peeked.next
            return peeked.data
        }
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }

    // Permite que o número de elementos seja consultado fora da classe
    get count() { 
        return this.#count
    }

    print() {
        let output = '( '
        let node = this.#head 
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]9 ` + JSON.stringify(node.data)
            if (node.next) output += ' -> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`
    }
}

