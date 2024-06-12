import { Bebidas } from "../Abstratas/Bebidas";
import { Decoradores } from "../Abstratas/Decorator";


export class Chocolate extends Decoradores{

    bebida : Bebidas
    
constructor(bebida : Bebidas){
    super()
    this.bebida = bebida
    this.name = "Adicional de chocolate"
    this.valor = 0.20
}

    public getName(): string {
       return this.name;
    }
    public Valor(): number {
        
        return this.valor + this.bebida.Valor()
    }


    
}