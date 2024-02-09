// esto es para calcular factorial
function calcularFactorial(numero) {
    if (numero < 0) return "No permite numeros negativos.";
    if (numero === 0 || numero === 1) return 1;
    return numero * calcularFactorial(numero - 1);
}

// Funcion input y el resultado
function solicitarNumeroYCalcularFactorial() {
    const input = document.getElementById('inputNumero');
    const numero = parseInt(input.value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero) || numero < 0) {
        resultadoDiv.textContent = 'Ingresa un número ';
    } else {
        const factorial = calcularFactorial(numero);
        resultadoDiv.textContent = `El factorial de ${numero} es: ${factorial}`;
    }
}
