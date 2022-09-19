"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var aviao_1 = require("./aviao");
var prompt = PromptSync();
var empresa = prompt('Diga o nome da empresa: ');
var capacidade = Number(prompt('Diga qual a capacidade de pessoas a bordo: '));
var potencia = Number(prompt('Diga a potencia: '));
var dados = new aviao_1.Aviao({
    empresa: empresa,
    capacidade: capacidade,
    potencia: potencia
});
console.log("O nome da empresa \u00E9 ".concat(empresa, ", nossos avi\u00F5es sao capazes de comportar ").concat(capacidade, " pessoas a bordo,e a potencia dos avi\u00F5es s\u00E3o de ").concat(potencia, " de cavalos"));
