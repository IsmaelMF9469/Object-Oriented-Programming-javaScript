import PromptSync = require('prompt-sync')
import { Smarthphone } from './smarthphone'

const prompt = PromptSync();

const nome = prompt ('Diga o nome do Smarthphone: ')
const armazenamento = Number (prompt('Diga qual a capacidade de armazenamento: '))
const bateria = Number (prompt('Diga quanto tempo dura a bateria: '))

const celular = new Smarthphone ({
    nome,
    armazenamento,
    bateria
})

console.log(`O nome do smarthphone é ${nome},tem ${armazenamento} de armazenamento, e ainda é capaz de durar por ${bateria} horas `)