import { BeefBurger } from "./Entities/BeefBurger";
import {Burger } from "./Entities/Burger"
import { VeggieBurger } from "./Entities/VeggieBuger";
import { BeefBurgerFactory } from "./Factories/BeefBurgerFactory";
import {BurgerFactory}  from "./Factories/BurgerFactory";
import { VeggieBurgerFactory } from "./Factories/VeggieBurgerFactory";


console.log("Pedindo buger de beef\n")
let burgerFactory : BurgerFactory = new BeefBurgerFactory()
let beefBurger : Burger = burgerFactory.orderBurger()



console.log("\nPedindo buger veggie\n")

 burgerFactory  = new VeggieBurgerFactory()
let veggieBurger : Burger = burgerFactory.orderBurger()
