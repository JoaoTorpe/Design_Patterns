import { Burger } from "./Burger";

export class BeefBurger extends Burger{
makeBurger():void {
    console.log("Fazendo Beef Burger....")
    console.log("Beef Burger enviado....")
}

constructor (){
    super();
    this.setName("Beef Buger")
}



}