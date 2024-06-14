import { Veiculo } from "../Entidades/Veiculo";
import { EnumTerrestres } from "../Enums/EnumTerrestres";

export abstract class FabricaDeVeiculos<T extends Veiculo>{

    abstract fabricarVeiculo(escolha:number,name:string):T;

}