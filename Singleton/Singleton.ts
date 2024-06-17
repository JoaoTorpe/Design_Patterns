
export class Singleton{

private static singleton:Singleton | null = null


public static getInstance():Singleton{

if(this.singleton == null){
     
    return new Singleton()
}
else{return this.singleton}
}

 testSingleton(){
    console.log("Singleton")
}


}