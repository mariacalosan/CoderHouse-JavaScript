if (numero === null) {
    numero = prompt('Ingresá un número', '1');
} else if (isNumber(numero) === false) {
    numero = prompt('Ingresá un número, el valor ingresado debe ser un número', numero || '1');
}
console.log(`el número ingresado es ${numero} y la cantidad es ${amount}`);
console.log(`Se sumara los numeros ingresados ${amount} ${terms.amount}`);

for (let x = 0, max = amount, total = 0; x < amount; x = x + 1) {
    for (let x = 0, max = amount, total = 0; x < max; x = x + 1) {

        total += Number(numero);
        log(`Iteración ${x + 1} de ${amount}; el total es ${total}`);
        log(`Iteración ${x + 1} de ${max}; el total es ${total}`);

    }
}