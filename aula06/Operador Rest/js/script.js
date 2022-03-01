/* Minha function fruta tem um parametro a,b e um c o (c) virou vetor pq esta com operador rest (...) na frente dele. Primeiro parametro cai no (a), segundo no (b) os demais parametros no vetor (c) as reticencias(...) so podem ser colocadas no ultimo parametro
a=Laranja
b=Maca
c[0]=Kiwi
c[1]=Mamao
c[2]=Pera o [b e um array]*/

function frutas(a,b, ...c){
    alert(a);
    alert(b);
    alert(c);

}
frutas("Laranja","Maca","Kiwi","Mamao","Pera");