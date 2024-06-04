let arr = [1, 2, 3];
    const arrayDisplay = document.getElementById('arrayDisplay');
    const output = document.getElementById('output');

    function updateDisplay() {
        arrayDisplay.textContent = JSON.stringify(arr);
    }

    document.getElementById('shiftBtn').onclick = function() {
        if (arr.length > 0) {
            let shiftedElement = arr.shift(); // Elimina el primer elemento
            updateDisplay();
            output.textContent = 'Elemento eliminado con shift(): ' + shiftedElement;
        } else {
            output.textContent = 'El array está vacío, no se puede aplicar shift().';
        }
    };

    document.getElementById('unshiftBtn').onclick = function() {
        const unshiftValue = document.getElementById('unshiftValue').value;
        if (unshiftValue !== '') {
            const parsedValue = parseFloat(unshiftValue); // Convierte el valor a número
            if (!isNaN(parsedValue)) {
                if (!arr.includes(parsedValue)) { // Verifica duplicados
                    arr.unshift(parsedValue); // Añade el valor al inicio
                    updateDisplay();
                    output.textContent = 'Elemento añadido con unshift(): ' + parsedValue;
                } else {
                    output.textContent = 'El valor ya está en el array. No se permiten duplicados.';
                }
            } else {
                output.textContent = 'Por favor, ingresa un número válido.';
            }
        } else {
            output.textContent = 'Por favor, ingresa un valor para unshift.';
        }
    };

    // Inicializa la visualización del array
    updateDisplay();