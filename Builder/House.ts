
export class House{

    bedRoomsQuant: number
    bathroomsQuant:number
    windowsQuant:number
    hasGarage:boolean
    hasPool:boolean

    constructor(bedRoomsQuant: number, bathroomsQuant: number, windowsQuant: number, hasGarage: boolean, hasPool: boolean) {
        this.bedRoomsQuant = bedRoomsQuant;
        this.bathroomsQuant = bathroomsQuant;
        this.windowsQuant = windowsQuant;
        this.hasGarage = hasGarage;
        this.hasPool = hasPool;
    }


}