
import { Fabrica } from "./Fabricas/Fabrica"
import { FabricaDeCarro } from "./Fabricas/FabricaDecarros"
import { Veiculo } from "./Entidades/Veiculo"
import { fabricaDeMotos } from "./Fabricas/FabricaDeMotos"

let fabrica : Fabrica
fabrica = new FabricaDeCarro()
let terrestre1 : Veiculo = fabrica.frabricar("kawazaki") 

fabrica = new fabricaDeMotos()
let terrestre2: Veiculo = fabrica.frabricar("Toyota")

console.log("Moto: ",terrestre1.name)
console.log("Carro: ",terrestre2.name)

