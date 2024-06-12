import { BeefBurger } from "../Entities/BeefBurger";
import { Burger } from "../Entities/Burger";
import { BurgerFactory } from "./BurgerFactory";

export class BeefBurgerFactory extends BurgerFactory{


    CreateBurger(): Burger {
        
            let burger: Burger = new BeefBurger(); 
            return burger

    }


    
}