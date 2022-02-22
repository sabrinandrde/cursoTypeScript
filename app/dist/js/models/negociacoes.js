export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    paraTexto() {
        throw new Error('Method not implemented.');
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
