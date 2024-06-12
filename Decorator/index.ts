import { Decorator } from "typescript";
import { Bebidas } from "./Abstratas/Bebidas"
import { CafeEspresso } from "./Entidades/CafeEspresso"
import { CafePreto } from "./Entidades/CafePreto";
import { Chocolate } from "./Entidades/Chocolate";
import { Morango } from "./Entidades/Morango";

console.log("Criando bebidas.....")

let cafeEspresso : Bebidas = new CafeEspresso();
let cafePreto : Bebidas = new CafePreto();





console.log("Criando adicionais.....\n")
console.log("Tabela de precos\n")
console.log("Cafe preto: R$ "+cafePreto.valor)
console.log("Cafe espresso: R$ "+cafeEspresso.valor)
console.log("Adicional de chocolate: R$ "+0.20)
console.log("Acidiconal de morango: R$ "+2.00)

console.log("\n")

cafeEspresso = new Chocolate(cafeEspresso)
console.log("Cafe espresso com chocolate: R$ "+cafeEspresso.Valor())

cafePreto = new Morango(cafePreto)

console.log("Cafe preto com morango: R$ "+cafePreto.Valor())
cafeEspresso = new Chocolate(cafeEspresso)

console.log("Cafe expresso com duplo chocolate: R$ "+cafeEspresso.Valor().toFixed(2))

cafePreto = new Chocolate(cafePreto)

console.log("Cafe preto com chocolate e morago: R$ "+cafePreto.Valor().toFixed(2))