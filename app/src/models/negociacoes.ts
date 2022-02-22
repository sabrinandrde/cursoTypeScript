import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
    public paraTexto(): string {
        throw new Error('Method not implemented.');
    }
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
