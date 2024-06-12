import { House } from "./House";
import { HouseBuilder } from "./HouseBuilder";

 const houseBuilder:HouseBuilder = new HouseBuilder()

 let house:House = houseBuilder._bathroomsQuant(2)
                    ._bedRoomsQuant(3)
                    ._hasGarage(true)
                    ._hasPool(false)
                    ._windowsQuant(6)
                    .build()

console.log("Casa: ",house)