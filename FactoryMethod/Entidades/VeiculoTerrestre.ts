import { Veiculo } from "./Veiculo";

export abstract class  VeiculoTerrestre extends Veiculo {

quantidadeRodas:number
constructor(quantidadeRodas:number,name:string){
    super(name)
this.quantidadeRodas = quantidadeRodas
}

}
