import { Jornal } from "./Entidades/Jornal"
import { Reader } from "./Entidades/Reader"

console.log("Criando readers.....")

let leitor1 = new Reader("joao",19)
let leitor2 = new Reader("Victor",91)


console.log(" Adicionando à lista.....")

let jornal = new Jornal("Greve","Universidades e instituições federais entrao de greve")

jornal.registerObserver(leitor1)
jornal.registerObserver(leitor2)

console.log("Notificando......")

jornal.notifyAll()