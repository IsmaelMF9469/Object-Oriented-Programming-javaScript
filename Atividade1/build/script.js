"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var dados_1 = require("./dados");
var prompt = PromptSync();
var nome = ('Diga o seu nome: ');
var cpf = Number(prompt('Diga o seu CPF: '));
var dataN = Number(prompt('Diga a sua data de nascimento'));
var idade = Number(prompt('Diga a sua idade: '));
var compra = Number(prompt('Quantos itens você comprou: '));
var dados = new dados_1.Dados({
    nome: nome,
    cpf: cpf,
    dataN: dataN,
    idade: idade
});
console.log("Seu CPF \u00E9 ".concat(cpf, " e voc\u00EA comprou ").concat(compra, " itens na minha loja"));
