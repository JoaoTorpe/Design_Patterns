import { Bebidas } from "./Bebidas";

export abstract class Decoradores extends Bebidas {
valor:number = 0.0;
public abstract getName():string;

}