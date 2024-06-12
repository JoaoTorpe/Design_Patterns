
import { House } from "./House"
export class HouseBuilder{

    bedRoomsQuant: number = 0
    bathroomsQuant:number = 0
    windowsQuant:number= 0
    hasGarage:boolean = false
    hasPool:boolean = false
constructor(){}
    

     _bedRoomsQuant(value: number):HouseBuilder {
        this.bedRoomsQuant = value;
        return this
    }

     _bathroomsQuant(value: number):HouseBuilder {
        this.bathroomsQuant = value;
        return this 
    }

     _windowsQuant(value: number):HouseBuilder {
        this.windowsQuant = value;
        return this
    }

     _hasGarage(value: boolean):HouseBuilder {
        this.hasGarage = value;
        return this
    }

     _hasPool(value: boolean):HouseBuilder {
        this.hasPool = value;
        return this
    }


     build():House {
        
        return new House(this.bedRoomsQuant, this.bathroomsQuant, this.windowsQuant, this.hasGarage, this.hasPool)

    }

}