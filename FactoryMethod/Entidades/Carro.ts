
import { VeiculoTerrestre } from "./VeiculoTerrestre"
export class Carro extends VeiculoTerrestre{
   
    constructor(name:string){
        super(4,name)
        
    }
    
    abrirPortaMalas():void{
    console.log("Abrindo porta malas do carro...")
    }
    
    }