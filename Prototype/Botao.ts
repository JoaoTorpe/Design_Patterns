export class Botao {
    private _cor: string;
    private _largura: number;
    private _comprimento: number;

    constructor(cor: string, largura: number, comprimento: number) {
        this._cor = cor;
        this._largura = largura;
        this._comprimento = comprimento;
    }

   
    set cor(cor: string) {
        this._cor = cor;
    }

    
    get cor(): string {
        return this._cor;
    }

   
    set largura(largura: number) {
        this._largura = largura;
    }

 
    get largura(): number {
        return this._largura;
    }

  
    set comprimento(comprimento: number) {
        this._comprimento = comprimento;
    }

   
    get comprimento(): number {
        return this._comprimento;
    }
}
