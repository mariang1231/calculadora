// Función principal para realizar cálculos
/**
 * Calcula el resultado de una operación matemática entre dos números.
 * 
 * @param {number} numero1 - El primer número.
 * @param {number} numero2 - El segundo número.
 * @param {string} [operacion='multiplicacion'] - Tipo de operación (suma, resta, division, multiplicacion).
 */
function calcular(numero1, numero2, operacion = 'multiplicacion') {
    let valor = 0; // Variable para almacenar el resultado de la operación
    let signo = ''; // Variable para almacenar el símbolo de la operación

    // Determina la operación a realizar según el parámetro 'operacion'
    if (operacion === 'suma') {
        valor = numero1 + numero2; // Realiza la suma
        signo = '+'; // Asigna el símbolo correspondiente
    } else if (operacion === 'resta') {
        valor = numero1 - numero2; // Realiza la resta
        signo = '-'; // Asigna el símbolo correspondiente
    } else if (operacion === 'division') {
        valor = numero1 / numero2; // Realiza la división
        signo = '/'; // Asigna el símbolo correspondiente
    } else {
        valor = numero1 * numero2; // Realiza la multiplicación (por defecto)
        signo = '*'; // Asigna el símbolo correspondiente
    }

    // Crea un objeto para encapsular los datos del cálculo
    const respuesta = {
        operacion: operacion, // Tipo de operación
        signo: signo, // Símbolo de la operación
        numero1: numero1, // Primer número
        numero2: numero2, // Segundo número
        total: valor // Resultado de la operación
    };

    // Llama a la función para mostrar el resultado
    mostrarRespuesta(respuesta);
}

// Función para mostrar el resultado en la consola
/**
 * Muestra el resultado de una operación matemática en la consola.
 * 
 * @param {Object} data - Objeto que contiene los datos de la operación.
 * @param {string} data.operacion - Tipo de operación realizada.
 * @param {string} data.signo - Símbolo de la operación.
 * @param {number} data.numero1 - Primer número del cálculo.
 * @param {number} data.numero2 - Segundo número del cálculo.
 * @param {number} data.total - Resultado de la operación.
 */
function mostrarRespuesta(data) {
    console.log(`El resultado de la operación ${data.operacion}: ${data.numero1} ${data.signo} ${data.numero2} es: ${data.total}`);
}

// Ejecución de pruebas con diferentes operaciones
/**
 * Llamadas de prueba a la función calcular con diferentes operaciones.
 */
calcular(17, 5, "suma");       // Realiza una suma: 17 + 5
calcular(36, 17, "resta");     // Realiza una resta: 36 - 17
calcular(21, 7, "division");   // Realiza una división: 21 / 7
calcular(10, 2);               // Realiza una multiplicación (por defecto): 10 * 2

