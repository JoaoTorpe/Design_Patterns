import { Bebidas } from "../Abstratas/Bebidas";
import { Decoradores } from "../Abstratas/Decorator";

export class Morango extends Decoradores{
    bebida: Bebidas

    constructor(bebida : Bebidas){
        super()
        this.bebida = bebida
        this.name = "Adicional de Morango"
        this.valor = 2.00
    }
    
    public getName(): string {
      return this.name
    }
    public Valor() {
        return this.valor + this.bebida.Valor()
    }



    
}