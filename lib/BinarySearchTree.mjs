/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA

    - Árvore -> é uma estrutura de dados não-linear, hierárquica,
    que é formada recursivamente  por outras sub-árvores.
    - Árvore binária -> uma árvore na qual cada nodo tem grau máximo
    igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
    diretos)
    - Árvore binária de busca -> é uma árvore binária otimizada para a 
    operação de busca binária. Por isso, na inserção, os valores são 
    colocados já em ordem. 
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null // Ponteiro para a subárvore esquerda (valores menores)
        this.right = null // Ponteiro para a subárvore direita (valores maiores)
    }
}

export class BinarySearchTree {

    #root // Raiz da árvore

    constructor() {
        this.#root = null
        console.log(this.#root)
    }

    insert(val) {
        
        const node = new Node(val)

        // 1º caso: árvore vazia
        if(this.#root === null) this.#root = node
        // 2º caso: inserção recursiva
        else this.#insertNode(node, this.#root)

        console.log(this.#root)

    }

    // Parâmetros:
    // node -> nodo a ser inserido
    // root -> raiz da SUBÁRVORE no qual o nodo será inserido
    #insertNode(node, root){
        if(node.data < root.data) { // Vamos para a esquerda
            // Possibilidade 1: nodo à esquerda vazio, inserimos o nodo
            if(root.left === null) root.left = node
            // Possibilidade 2: nodo à esquerda ocupado, precisamos descer mais à esquerda
            else this.#insertNode(node, root.left)
        }
        else if (node.data > root.data) {
            // Possibilidade 1: nodo à direita vazio, inserimos o nodo
            if(root.right === null) root.right = node
            // Possibilidade 2: nodo à direita ocupado, precisamos descer mais à direita
            else this.#insertNode(node, root.right)
        }
    }

    // Percurso da árvore EM ORDEM
    // 1º: visita EM ORDEM a subárvore esquerda
    // 2º: visita a raiz
    // 3º: visita EM ORDEM a subárvore direita
    inOrderTraversal(fnCallback, root = this.#root){
        if(root != null){
            this.inOrderTraversal(fnCallback, root.left) // Visita a subárvore esquerda
            fnCallback(root.data) // Visita a raiz
            this.inOrderTraversal(fnCallback, root.right) // Visita a subárvore direita
        }
    }

    // Percurso da árvore PRÉ-ORDEM
    // 1º: visita a raiz
    // 2º: visita a subávore esquerda PRÉ-ORDEM
    // 3º: visita a subárvore direita PRÉ-ORDEM
    preOrderTraversal(fnCallback, root = this.#root){
        if(root != null){
            fnCallback(root.data) // Visita a raiz
            this.preOrderTraversal(fnCallback, root.left) // Visita a subárvore esquerda
            this.preOrderTraversal(fnCallback, root.right) // Visita a subárvore direita
        }
    }

    // Percurso da árvore PÓS-ORDEM
    // 1º: visita a subárvore esquerda em PÓS-ORDEM
    // 2º: visita a subárvore direita em PÓS-ORDEM
    // 3º: visita a raiz
    postOrderTraversal(fnCallback, root = this.#root) {
        if(root != null) {
            this.postOrderTraversal(fnCallback, root.left)
            this.postOrderTraversal(fnCallback, root.right)
            fnCallback(root.data)
        }
    }

    // Retorna o menor valor armazenado na árvore
    min() {
        let node = this.#minNode(this.#root)
        return node != null ? node.data : null
    }

    // Encontra o menor valor armazenado em uma subárvore, considerada
    // a partir da raiz passada como parâmentro
    #minNode(root){
        let min = root

        // Desce à esquerda da raiz até não ser mais possível
        while(min != null && min.left != null) min = min.left

        return min
    }

    max(){
        let node = this.#maxNode(this.#root)
        return node != null ? node.data : null
    }

    // Encontra o maior valor armazenado em uma subárvore, considerada
    // a partir da raiz passada como parâmetro
    #maxNode(root){
        let max = root
        while(max != null && max.right != null) max = max.right
        return max
    }

    search(key){
        let node = this.#searchNode(this.#root, key)
        // O valor exsite se o nodo retornado é válido (diferente de null)
        return node != null
    }

    // Procura por um valor (key) dentro da subárvore cuja origem é root
    #searchNode(root, key){

        // 1º caso: root é null
        if(root === null) return null

        // 2º caso: key é menor que o valor da raiz
        // continua a busca pela subárvore ESQUERDA
        if(key < root.data) return this.#searchNode(root.left, key) 

        // 3º caso: key é MAIOR que o valor da raiz,
        // continua a busca pela subárvore DIREITA
        if(key > root.data) return this.#searchNode(root.right, key)

        // 4º caso: key é IGUAL ao valor da raiz, retorna o próprio root
        return root
    }
}

// OBS: No pré-odem a raiz é a primera a ser visitada, já no pós-ordem, ela é a última.
// OBS: # é para uso na própria classe