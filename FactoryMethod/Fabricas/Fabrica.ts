import { Veiculo } from "../Entidades/Veiculo";


export interface Fabrica{

     frabricar(name:string):Veiculo;

}