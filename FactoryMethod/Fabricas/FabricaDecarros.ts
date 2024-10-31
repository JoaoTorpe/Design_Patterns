import { Carro } from "../Entidades/Carro"
import { Veiculo } from "../Entidades/Veiculo"
import { Fabrica } from "./Fabrica"

export class FabricaDeCarro implements Fabrica{

    frabricar(name: string): Veiculo {
       return new Carro(name)
    }
    

}