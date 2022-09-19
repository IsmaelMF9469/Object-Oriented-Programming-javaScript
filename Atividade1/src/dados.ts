interface NewDados{
    nome: string;
    cpf: Number;
    dataN: Number;
    idade: Number;
}

class Dados{
    private nome: string;
    private cpf: Number;
    private dataN: Number;
    private idade: Number;
    
    constructor ({nome,cpf,dataN,idade}:NewDados){
    this.nome = nome
    this.cpf = cpf
    this.dataN = dataN
    this.idade = idade
    }
}

export { Dados }