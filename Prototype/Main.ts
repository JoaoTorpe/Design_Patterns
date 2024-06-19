import { Botao } from "./Botao";
import { BotaoRegistry } from "./BotaoRegistry";

let botaoAzul:Botao = BotaoRegistry.getBotao("BOTAO_AZUL")
console.log(botaoAzul)

let botaoVerde:Botao = BotaoRegistry.getBotao("BOTAO_VERDE")
console.log(botaoVerde)