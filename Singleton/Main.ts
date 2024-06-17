import { Singleton } from "./Singleton";

let singleton: Singleton = Singleton.getInstance()


console.log(singleton.toString())
singleton.testSingleton()

