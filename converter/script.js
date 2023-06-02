function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = document.getElementById("result");
  
    if (fromUnit === toUnit) {
      result.innerHTML = "Please select different units to convert.";
      return;
    }
  
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        var convertedTemperature = (inputTemperature * 9/5) + 32;
        result.innerHTML = inputTemperature + " °C = " + convertedTemperature + " °F";
      } else if (toUnit === "kelvin") {
        var convertedTemperature = parseFloat(inputTemperature) + 273.15;
        result.innerHTML = inputTemperature + " °C = " + convertedTemperature + " K";
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        var convertedTemperature = (inputTemperature - 32) * 5/9;
        result.innerHTML = inputTemperature + " °F = " + convertedTemperature + " °C";
      } else if (toUnit === "kelvin") {
        var convertedTemperature = (inputTemperature - 32) * 5/9 + 273.15;
        result.innerHTML = inputTemperature + " °F = " + convertedTemperature + " K";
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        var convertedTemperature = parseFloat(inputTemperature) - 273.15;
        result.innerHTML = inputTemperature + " K = " + convertedTemperature + " °C";
      } else if (toUnit === "fahrenheit") {
        var convertedTemperature = (inputTemperature - 273.15) * 9/5 + 32;
        result.innerHTML = inputTemperature + " K = " + convertedTemperature + " °F";
      }
    }
  }
  