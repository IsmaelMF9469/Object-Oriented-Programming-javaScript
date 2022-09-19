"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var smarthphone_1 = require("./smarthphone");
var prompt = PromptSync();
var nome = prompt('Diga o nome do Smarthphone: ');
var armazenamento = Number(prompt('Diga qual a capacidade de armazenamento: '));
var bateria = Number(prompt('Diga quanto tempo dura a bateria: '));
var celular = new smarthphone_1.Smarthphone({
    nome: nome,
    armazenamento: armazenamento,
    bateria: bateria
});
console.log("O nome do smarthphone".concat(nome, ",tem ").concat(armazenamento, " de armazenamento, e ainda \u00E9 capaz de durar por ").concat(bateria, " horas "));
