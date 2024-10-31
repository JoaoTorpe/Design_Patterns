import { Moto } from "../Entidades/Moto";
import { Veiculo } from "../Entidades/Veiculo";
import { Fabrica } from "./Fabrica"

export class fabricaDeMotos implements Fabrica {

    frabricar(name: string): Veiculo {
        return new Moto(name)
    }

}