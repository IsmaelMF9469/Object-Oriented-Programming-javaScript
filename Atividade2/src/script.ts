import PromptSync = require('prompt-sync')
import { Aviao } from './aviao'

const prompt = PromptSync();

const empresa = prompt ('Diga o nome da empresa: ')
const capacidade = Number (prompt('Diga qual a capacidade de pessoas a bordo: '))
const potencia = Number (prompt('Diga a potencia: '))

const aviao = new Aviao ({
    empresa,
    capacidade,
    potencia
})

console.log(`O nome da empresa é ${empresa}, nossos aviões sao capazes de comportar ${capacidade} pessoas a bordo,e a potencia dos aviões são de ${potencia} de cavalos`)