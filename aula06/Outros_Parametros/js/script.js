/* Eu posso pegar um vetor (um objeto inteiro) e passar como parametro para uma funcao. Numa unica variavel (pessoa) eu to enviando e recebendo*/

const pessoa={
    nome: "Eliz",
    idade: 41,
}

function exibir(x){
    alert(`${x.nome}\n ${x.idade}`);
}

exibir(pessoa);