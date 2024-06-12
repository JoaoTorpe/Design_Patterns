import { Bebidas } from "../Abstratas/Bebidas";

export class CafePreto  extends Bebidas{
    public Valor(): number {
        return this.valor
    }

    constructor(){
        super()
        this.name = "Cafe Preto"
        this.valor = 5.00
    }
    


}