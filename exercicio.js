let nome = "joao pedro"
let idade = 16
let curso = "infonet"

console.log("olá, sou o " + nome + " tenho " + idade + " anos, e estou cursando o " + curso)

let num1 = 27
let num2 = 34

console.log (num1 + num2)

let n1 = 9
let n2 = 3

console.log (n1 + n2)
console.log (n1 - n2)
console.log (n1 * n2)
console.log (n1 / n2)
console.log (n1 % n2)

let numero = "30"
let numerointeiro = Number(numero)
console.log (numerointeiro + 20)

let a = 10
let b = "10"

if (a==b) {
    console.log("verdadeiro")
}
else {
    console.log("falso")
}

if (a===b) {
    console.log("verdadeiro")
}
else {
    console.log("falso")
}

if (idade>=18) {
    console.log("maior de idade")
}
else {
    console.log("menor de idade")
}

let nume = 7

if (nume > 0) {
    console.log("seu numero é positivo")
}
else if (nume = 0) {
    console.log ("seu numero é zero")
}
else {
    console.log("seu numero é negativo")
}

let nota = 8

if (nota>= 7) {
    console.log("aluno aprovado")
}
else if (nota>=5 && nota<7) {
    console.log("aluno em recuperação")
}
else {
    console.log ("aluno reprovado")
}

for (let i = 0; i <= 10; i++) {
    console.log("valor de i: " + i)
}

soma = 0

for (let i = 0; i <= 100; i++) {
    soma = soma + i
}
console.log(soma)

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}


function somar(num1, num2) {
    return num1 + num2;
}

console.log(somar(5, 3));


 function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParImpar(4));
