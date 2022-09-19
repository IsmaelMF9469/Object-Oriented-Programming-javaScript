import PromptSync = require('prompt-sync')
import { Dados } from './dados'

const prompt = PromptSync();

const nome = ('Diga o seu nome: ')
const cpf = Number(prompt('Diga o seu CPF: '))
const dataN = Number (prompt('Diga a sua data de nascimento: '))
const idade = Number (prompt('Diga a sua idade: '))
const compra = Number (prompt('Quantos itens você comprou: '))

const dados = new Dados ({
    nome,
    cpf,
    dataN,
    idade
})

console.log(`Seu CPF é ${cpf} e você comprou ${compra} itens na minha loja`)