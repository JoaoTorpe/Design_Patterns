class Carro extends VeiculoTerrestre{

    constructor(name:string){
        super()
        this.quantidadeRodas = 4
        this.name = name
    }
    
    abrirPortaMalas():void{
    console.log("Abrindo porta malas do carro...")
    }
    
    }