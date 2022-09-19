"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var funcionario_1 = require("./funcionario");
var prompt = PromptSync();
var nome = prompt('Diga o nome do funcionario: ');
var horas = Number(prompt('Diga a jornada de trabalho diária: '));
var atividade = Number(prompt('Diga o numero de atividades feitas pelo funcionario por dia : '));
var funcionario = new funcionario_1.Funcionario({
    nome: nome,
    horas: horas,
    atividade: atividade
});
console.log("O nome do funcionario \u00E9 ".concat(nome, " e ele trabalha ").concat(horas, "horas por dia"));
