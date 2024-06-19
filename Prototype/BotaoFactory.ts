import { Botao } from "./Botao";

export class BotaoFactory{

    public static criarBotao(prototipo:Botao){
        let clone:Botao = new Botao(prototipo.cor,prototipo.largura,prototipo.comprimento)
        return clone
    }

}