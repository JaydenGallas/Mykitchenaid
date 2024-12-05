const inputField = document.getElementById('invoer');
const startUnit = document.getElementById('startEenheid');
const convertUnit = document.getElementById('convertEenheid');
const output = document.getElementById('output');

inputField.addEventListener('input', updateOutput);
startUnit.addEventListener('change', updateOutput);
convertUnit.addEventListener('change', updateOutput);

document.addEventListener('keydown', handleKeyPress);

function updateOutput() {
    const inputValue = parseFloat(inputField.value) || 0;
    const start = startUnit.value;
    const convert = convertUnit.value;
    const convertedValue = convertUnits(inputValue, start, convert);

    output.textContent = `${convertedValue} ${convert}`;
}

function convertUnits(value, fromUnit, toUnit) {
    const conversionRates = {
        ml: 1,
        cl: 10,
        dl: 100,
        l: 1000,
    };

    const valueInMl = value * conversionRates[fromUnit];
    return valueInMl / conversionRates[toUnit];
}

function handleKeyPress(event) {
    if (document.activeElement !== inputField);

    let currentValue = parseFloat(inputField.value) || 0;

    switch (event.key) {
        case 'ArrowUp':
            inputField.value = currentValue + 10;
            break;
        case 'ArrowDown':
            inputField.value = currentValue - 10;
            break;
        case 'ArrowRight':
            inputField.value = currentValue + 1;
            break;
        case 'ArrowLeft':
            inputField.value = currentValue - 1;
            break;
        case 'q':
            startUnit.value = 'ml';
            break;
        case 'w':
            startUnit.value = 'cl';
            break;
        case 'e':
            startUnit.value = 'dl';
            break;
        case 'r':
            startUnit.value = 'l';
            break;
        case 'a':
            convertUnit.value = 'ml';
            break;
        case 's':
            convertUnit.value = 'cl';
            break;
        case 'd':
            convertUnit.value = 'dl';
            break;
        case 'f':
            convertUnit.value = 'l';
            break;
        default:
    }

    updateOutput();
}
