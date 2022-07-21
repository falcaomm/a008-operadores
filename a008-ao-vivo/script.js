//OPERADORES ARITIMÉTICOS
console.log("OPERADORES ARITIMÉTICOS");

let saldo;
saldo = 15
console.log("saldo inicial =", saldo);
saldo = saldo + 22.40
console.log("soma + 22.40 = ", saldo);
saldo -= 12.34
console.log('subtração - 12.34 =', saldo);
saldo = saldo/3
console.log('divisão /3 =', saldo);
saldo *= 3.42
console.log('multiplicação *3.42 =', saldo);
saldo %= 3
console.log('resto %3 =', saldo);

saldo = 28.5684 - saldo
console.log("o que foi dividido", saldo);
saldo /=3
console.log("o que ficou em cada banco", saldo);

//PRECEDÊNCIA MATEMÁTICA
console.log("PRECEDÊNCIA MATEMÁTICA");

const semParenteses= 2*2+2
console.log('Sem Parênteses', semParenteses);

const comParenteses = 2*(2+2)
console.log('Com Parênteses', comParenteses);

//IGUAL OU DIFERENTE
console.log("IGUAL OU DIFERENTE");

const resultado1 = 5===5
console.log("r1=", resultado1);

const resultado2 = 5!==5
console.log("r2=", resultado2);

const resultado3 = 5!=="5"
console.log("r3=", resultado3);

const resultado4 = '5'==='cinco'
console.log("r4=", resultado4);

const resultado5 = typeof 5 === typeof 20
console.log("r5=", resultado5);

const resultado6 = typeof '5' === typeof '20'
console.log("r6=", resultado6);

//MENOR E MAIOR ou igual
console.log("MENOR E MAIOR ou igual");

const numero1 = 5
const numero2 = 2

console.log('o', numero1, 'é igual o', numero2, '=',  numero1 === numero2);

console.log('o', numero1, 'é menor ou igual o', numero2, '=',  numero1 <= numero2);

console.log('o', numero1, 'é maior que', numero2, '=',  numero1 > numero2);

console.log('o', numero1, 'é menor que', numero2, '=',  numero1 < numero2);

// se eu colocar o numero 1 como string ("5" por exemplo)  o exemplo dois ali de menor e igual vai da true pq nao ta considerando tipo e valor, só o valor

//LÓGICA && e || e ! - não é pra impirmir esse exercício no console

const a= "Quero dirigir um Celta 2012";
const b= 'Sou maior de idade';
const c= 'consigo comprar o Celta por 22.000 reais';
const d= 'consigo alugar o Celta';
const e= 'tenho carteira de motorista';

//construir essas frases só com lógica

// Quero dirigir o Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista e não quero dirigir o Celta 

a
! b
b && ! e
b && c || d
(b && e) && ! a