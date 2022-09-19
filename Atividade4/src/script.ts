import PromptSync = require('prompt-sync')
import { Funcionario } from './funcionario'

const prompt = PromptSync();

const nome = prompt ('Diga o nome do funcionario: ')
const horas = Number (prompt('Diga a jornada de trabalho diária: '))
const atividade = Number (prompt('Diga o numero de atividades feitas pelo funcionario por dia : '))

const funcionario = new Funcionario ({
    nome,
    horas,
    atividade
})

console.log(`O nome do funcionario é ${nome} e ele trabalha ${horas}horas por dia`)