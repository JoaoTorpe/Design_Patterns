import { Observer } from "../Interfaces/Observer";

export class Reader implements Observer {


constructor(public name:string,age:number){
}
    update(): void {
        console.log(this.name + " Foi notificado !")
    }

}