import { Bebidas } from "../Abstratas/Bebidas";

export class CafeEspresso  extends Bebidas{
    public Valor(): number {
        return this.valor
    }

    constructor(){
        super()
        this.name = "Cafe Expresso"
        this.valor = 10.00
    }
   



}