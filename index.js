1 - Verificador de Maioridade
let idade = prompt("Digite sua idade: ");

if (idade >= 18) {
   alert("Você é maior de idade.");
} else {
   alert("Você é menor de idade.");
}

2 - Par ou Ímpar
let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
   alert("O número é PAR.");
} else {
   alert("O número é ÍMPAR.");
}

3 - Calculadora Simples
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

if (operacao === "+") {
   resultado = num1 + num2;
} else if (operacao === "-") {
   resultado = num1 - num2;
} else if (operacao === "*") {
   resultado = num1 * num2;
} else if (operacao === "/") {
   resultado = num1 / num2;
} else {
   alert("Operação inválida!");
}

if (resultado !== undefined) {
   alert("Resultado: " + resultado);
}

4 - Tabuada Personalizada
let numero = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
   console.log(numero + " x " + i + " = " + (numero * i));
}

 5 - Média do Aluno
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
   alert("Aprovado! Média: " + media);
} else if (media >= 5) {
   alert("Recuperação! Média: " + media);
} else {
   alert("Reprovado! Média: " + media);
}

6 - Contagem até N
let numero = Number(prompt("Digite um número inteiro positivo:"));

for (let i = 1; i <= numero; i++) {
   console.log(i);
}

7 - Soma até digitar zero
let soma = 0;
let numero;

do {
   numero = Number(prompt("Digite um número (0 para parar):"));
   soma += numero;
} while (numero !== 0);

alert("Soma total: " + soma);

8 - Contador de números positivos
let contador = 0;

for (let i = 1; i <= 5; i++) {
   let numero = Number(prompt("Digite o " + i + "º número:"));
  
   if (numero > 0) {
       contador++;
   }
}

alert("Quantidade de números positivos: " + contador);

9 - Sistema de Login
let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let tentativas = 0;
let acesso = false;

while (tentativas < 3) {
   let usuario = prompt("Digite o usuário:");
   let senha = prompt("Digite a senha:");

   if (usuario === usuarioCorreto && senha === senhaCorreta) {
       alert("Login realizado com sucesso!");
       acesso = true;
       break;
   } else {
       tentativas++;
       alert("Usuário ou senha incorretos!");
   }
}

if (!acesso) {
   alert("Acesso bloqueado!");
}

10 - Cálculo de Fatorial
let numero = Number(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
   fatorial *= i;
}

alert("O fatorial de " + numero + " é: " + fatorial);

