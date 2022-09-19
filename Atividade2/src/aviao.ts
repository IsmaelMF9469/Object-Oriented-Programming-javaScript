interface NewAviao{
    empresa: string;
    capacidade: Number;
    potencia : Number;
    
}

class Aviao{
    private empresa: string;
    private capacidade: Number;
    private potencia: Number;
    
    constructor ({empresa,capacidade,potencia}:NewAviao){
    this.empresa = empresa
    this.capacidade = capacidade
    this.potencia = potencia
    }
}

export { Aviao }