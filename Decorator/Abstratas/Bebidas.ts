export abstract class Bebidas{
 name: string = '';
valor:number = 0.0
public getName():string{
    return this.name;
}

public abstract Valor():number;


}