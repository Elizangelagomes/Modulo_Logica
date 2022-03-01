/*declarei (minhaVariavel) sem usar o let ou var para ela se torna global. O let tem escopo de bloco se declaro let dentro da funcao a variavel fica presa e nao consigo fazer a leitura dela pq esta local.
Mesmo com var ele fica dentro da funcao. Var ou let teria que ir para fora e se torna Global para fazer a leitura
Observacao muito cuidado . E altamente recomendavel definir variaveis sempre usando var ou let, para que elas NAO vazem para fora das funcoes, por seguranca.*/

function minhaFuncao(){
    minhaVariavel="Variavel no escopo da funcao"
    return minhaVariavel;
}
alert(minhaFuncao());

alert(minhaVariavel);