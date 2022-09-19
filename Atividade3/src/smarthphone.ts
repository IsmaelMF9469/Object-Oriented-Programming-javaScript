interface NewAviao{
    nome: string;
    armazenamento: Number;
    bateria : Number;
    
}

class Smarthphone{
    private nome: string;
    private armazenamento: Number;
    private bateria: Number;
    
    constructor ({nome,armazenamento,bateria}:NewAviao){
    this.nome = nome
    this.armazenamento = armazenamento
    this.bateria = bateria
    }
}

export { Smarthphone }