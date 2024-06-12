import { Burger } from "./Burger";

export class VeggieBurger extends Burger{

makeBurger():void {
   console.log("Fazendo Veggie Burger....")
   console.log("Veggie Burger enviado....")
}



constructor (){
    super();
    this.setName("Veggie Buger")
}



}