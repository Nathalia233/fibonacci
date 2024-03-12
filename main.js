const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let fibonacci = [0, 1];

    while (b <= numero) {
        const temp = a;
        a = b;
        b = temp + b;
        fibonacci.push(b);
    }

    return fibonacci.includes(numero);
}

function main() {
    rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (numero) => {
        numero = parseInt(numero);
        if (verificaFibonacci(numero)) {
            console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
        }
        rl.close();
    });
}

main();