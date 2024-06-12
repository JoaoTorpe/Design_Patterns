import { BeefBurger } from "../Entities/BeefBurger";
import { Burger } from "../Entities/Burger";
import { VeggieBurger } from "../Entities/VeggieBuger";

export abstract class  BurgerFactory {

     

abstract CreateBurger():Burger;
     
public orderBurger():Burger{
let burger : Burger = this.CreateBurger() 
burger.makeBurger()
return burger

}


}