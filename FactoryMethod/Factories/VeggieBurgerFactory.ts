import { Burger } from "../Entities/Burger";
import { VeggieBurger } from "../Entities/VeggieBuger";
import { BurgerFactory } from "./BurgerFactory";

export class VeggieBurgerFactory extends BurgerFactory{
    CreateBurger(): Burger {
        let burger : Burger = new VeggieBurger()
        return burger
    }



}