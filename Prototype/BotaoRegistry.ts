import { Botao } from "./Botao"
import { BotaoFactory } from "./BotaoFactory"

export class BotaoRegistry{

   private static REGISTRY:Map<String,Botao> = new Map<String,Botao>()

static{
   const botaoAzul: Botao = new Botao("Azul",100,90)
   this.REGISTRY.set("BOTAO_AZUL",botaoAzul)

   const botaoVerde : Botao = new Botao("Verde",120,110)
   this.REGISTRY.set("BOTAO_VERDE",botaoVerde)
}

public static getBotao(chave:String){

    let prototipo : Botao = this.REGISTRY.get(chave) ?? new Botao("",0,0)
        if(prototipo.cor.length == 0){
            throw new Error("Prototipo é undefined")
        }

        return BotaoFactory.criarBotao(prototipo)
}



}