import { Veiculo } from "./Entidades/Veiculo"
import { FabricaDeTerrestres } from "./Fabricas/FabricaDeTerrestres"
import { FabricaDeVeiculos } from "./Fabricas/FabricaDeVeiculos"
import { EnumTerrestres } from "./Enums/EnumTerrestres"
import { Moto } from "./Entidades/Moto"
import { Carro } from "./Entidades/Carro"
import { VeiculoTerrestre } from "./Entidades/VeiculoTerrestre"
const fabricaDeTerestres = new FabricaDeTerrestres() 

let terrestre1 : Moto = fabricaDeTerestres.fabricarVeiculo(EnumTerrestres.MOTO,"Honda") 

let terrestre2: Carro = fabricaDeTerestres.fabricarVeiculo(EnumTerrestres.CARRO,"Chevrolet")

console.log("Moto: ",terrestre1.name)
console.log("Carro: ",terrestre2.name)

console.log("Moto: ",terrestre1.trocarEscapamento())
console.log("Carro: ",terrestre2.abrirPortaMalas())
