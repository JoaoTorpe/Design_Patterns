import { Observable } from "../Interfaces/Observable";
import { Observer } from "../Interfaces/Observer";

export class Jornal implements Observable {

    private readers: Observer[] = []

constructor(titulo:string,conteudo:string){

}
    registerObserver(observer: Observer): void {
       this.readers.push(observer);
    }
    unregisterObserver(observer: Observer): void {
      this.readers = this.readers.filter(e => e !== observer  )
    }
    notifyAll(): void {
        this.readers.forEach( r => r.update())
    }


}