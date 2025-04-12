document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display p');
    const buttons = document.querySelectorAll('.numbers');
    let operator = '';
    let currentValue = '';
    let previousValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            if (value === 'C') {
                // Limpa o display
                display.textContent = '0';
                currentValue = '';
                previousValue = '';
                operator = '';
            } else if (value === '<') {
                // Apaga o último dígito
                currentValue = currentValue.slice(0, -1);
                display.textContent = currentValue || '0';
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Define o operador e armazena o valor anterior
                operator = value;
                previousValue = currentValue;
                currentValue = '';
            } else if (value === '=') {
                // Realiza o cálculo
                if (previousValue && currentValue && operator) {
                    const result = eval(`${previousValue} ${operator} ${currentValue}`);
                    display.textContent = result;
                    currentValue = result.toString();
                    previousValue = '';
                    operator = '';
                }
            } else {
                // Adiciona o número ao display
                currentValue += value;
                display.textContent = currentValue;
            }
        });
    });
});