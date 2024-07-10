interface ProxyInterface{
    load(quantity:number):void

}

class RealObject implements ProxyInterface {
    load(quantity:number) {
        console.log("The object is loading ",quantity)
    }
}

class ObjectProxy implements ProxyInterface{
    realObject:RealObject = new RealObject()
    load(quantity: number) {
        if(quantity >=0){
       this.realObject.load(quantity)
        }
    }
}

let proxy:ObjectProxy = new ObjectProxy()

proxy.load(2)