function convert() {
    var fromUnit = document.getElementById('fromunit').value;
    var toUnit = document.getElementById('tounit').value;
    var temperature = parseFloat(document.getElementById('temprature').value);
    
    var convertedvalue;
    var resultunit;

    switch (fromUnit) {
        case 'C':
            if (toUnit === 'F') {
                convertedvalue = (temperature * 9/5) + 32;
                resultunit = 'F';
            } else if (toUnit === 'K') {
                convertedvalue = temperature + 273.15;
                resultunit = 'K';
            } else if (toUnit === 'R') {
                convertedvalue = temperature * 9/5 + 491.67;
                resultunit = 'R';
            } else {
                convertedvalue = temperature;
                resultunit = 'C';
            }
            break;

        case 'F':
            if (toUnit === 'C') {
                convertedvalue = (temperature - 32) * 5/9;
                resultunit = 'C';
            } else if (toUnit === 'K') {
                convertedvalue = (temperature - 32) * 5/9 + 273.15;
                resultunit = 'K';
            } else if (toUnit === 'R') {
                convertedvalue = temperature + 459.67;
                resultunit = 'R';
            } else {
                convertedvalue = temperature;
                resultunit = 'F';
            }
            break;

        case 'K':
            if (toUnit === 'C') {
                convertedvalue = temperature - 273.15;
                resultunit = 'C';
            } else if (toUnit === 'F') {
                convertedvalue = (temperature - 273.15) * 9/5 + 32;
                resultunit = 'F';
            } else if (toUnit === 'R') {
                convertedvalue = temperature * 9/5;
                resultunit = 'R';
            } else {
                convertedvalue = temperature;
                resultunit = 'K';
            }
            break;

        case 'R':
            if (toUnit === 'C') {
                convertedvalue = (temperature - 491.67) * 5/9;
                resultunit = 'C';
            } else if (toUnit === 'F') {
                convertedvalue = temperature - 459.67;
                resultunit = 'F';
            } else if (toUnit === 'K') {
                convertedvalue = temperature * 5/9;
                resultunit = 'K';
            } else {
                convertedvalue = temperature;
                resultunit = 'R';
            }
            break;
    }

    // Set the result value
    document.getElementById('result').value = convertedvalue.toFixed(2) + ' ' + resultunit;
}
