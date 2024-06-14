import { Carro } from "../Entidades/Carro"
import { Moto } from "../Entidades/Moto"
import { Veiculo } from "../Entidades/Veiculo"
import { VeiculoTerrestre } from "../Entidades/VeiculoTerrestre"
import { EnumTerrestres } from "../Enums/EnumTerrestres"
import { FabricaDeVeiculos } from "./FabricaDeVeiculos"

export class FabricaDeTerrestres extends FabricaDeVeiculos<VeiculoTerrestre>{
    
    fabricarVeiculo(escolha:EnumTerrestres,name:string):  any {
        switch(escolha){
            case EnumTerrestres.MOTO:
                return new Moto(name)
            case EnumTerrestres.CARRO:
                return new Carro(name)
        }
    }



}