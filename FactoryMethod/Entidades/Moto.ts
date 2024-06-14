class Moto extends VeiculoTerrestre{

constructor(name:string){
    super()
    this.quantidadeRodas = 2
    this.name = name
}

trocarEscapamento():void{
console.log("Trocando escapamento da moto...")
}

}