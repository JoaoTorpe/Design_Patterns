export abstract class Burger{
protected name : string = "";

protected getName(): string{
return this.name;
}

public setName(name: string): void {
    this.name = name;
}

abstract makeBurger():void;


}