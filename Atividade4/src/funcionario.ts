interface NewFuncionario{
    nome: string;
    horas: Number;
    atividade : Number;
    
}

class Funcionario{
    private nome: string;
    private horas: Number;
    private atividade: Number;
    
    constructor ({nome,horas,atividade}:NewFuncionario){
    this.nome = nome
    this.horas = horas
    this.atividade = atividade
    }
}

export { Funcionario }