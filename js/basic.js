
//var userName = 'Anderson Wodnoff'

//document.getElementById('name').innerHTML = userName


/*     *** operadores matematicos ***

var n1 = 7
var n2 = 2.5
var total = n1 / n2
// + para somar
//- para subtrair
// * para multiplicar
// - para dividir
console.log(total)   */


/*     *** operadores de comparação  ***
var v1 = 5
var v2 = 5
var resultado = v1 === v2
// === para comparar dois valores se são identicos,identicos é TRUE ou nao-identicos FALSE
// == para comparar dois valores se são parecidos, sem muita exatidão
// !=(v1!=v2 ,v1 é diferente de v2 ?) para ver se os dois valores sao diferentes ou iguais
console.log(resultado) */


/*       *** EXEMPLO DE FUNÇÃO _ 1 ***
function soma(n1,n2) {
    console.log(n1+n2)
}
soma(5,5) */


/*        *** EXEMPLO DE FUNÇÃO _ 2 ***
function boasVindas(nome) {
    alert(nome +' Seja Bem Vindo !!')
}
boasVindas("Anderson") */

  
// *** controle de fluxos ***

/*  Cenario 1 : Saque com Sucesso
.dado que meu daldo é 1000 reais
.quando faço um saque de 500 reais
.entao o valor do saque deve se deduzido do meu saldo */


/* Cenario 2 : Saque com valor superior ao saldo
.dado que meu daldo é 1000 reais
.quando faço um saque de 1001 reais
.entao não deve deduzir do meu saldo
.e deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo */

/* Cenario 3 : Saque com valor maximo
.dado que meu daldo é 1000 reais
.e o valor maximo para saque é de 700
.quando faço um saque no valor de 701
.entao nao deve deduzir do meu saldo
.e deve mostrar uma mensagem de alerta informando que o valor é superior ao maximo permitido */

/* // os tres cenarios em uma só função
var saldo = 1000
function saque(valor) {
    if (valor > saldo) {
        console.log('valor do saque superior ao saldo !')
    } else if(valor > 700){
        console.log('valor do saque  é superior permitido por operação !')
    }
    else {
        saldo = saldo - valor
    }    
}
saque(701)
console.log(saldo) */



//    ***  controle de repetição ***

/* var personagens = ['Mestre yoda', 'Luke', 'Princesa Leia', 'Darth vader']

personagens.forEach(function(p){
    console.log(p)
})

for (var i in personagens) {
    console.log(personagens[i])
    
} 

for (var i = 0; i <= 10; i++) {
    console.log(i)
    
}  */


//   *** objetos ***

/* var yoda = {nome :'Mestre Yoda',idade : 100,jedi: true, mostrarIdade: function(){
    console.log(`A idade do mestre yoda é de ${this.idade} anos`)
}}
console.log(yoda)
yoda.mostrarIdade() */



