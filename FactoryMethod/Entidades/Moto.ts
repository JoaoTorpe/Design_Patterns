import { VeiculoTerrestre } from "./VeiculoTerrestre"

export class Moto extends VeiculoTerrestre{

constructor(name:string){
    super(2,name)
    
}

trocarEscapamento():void{
console.log("Trocando escapamento da moto...")
}

}