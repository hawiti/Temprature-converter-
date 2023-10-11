var showResult = document.getElementById("show");
var unitSymbol = document.getElementById("units");
var unit = document.createElement("sup");
unit.textContent = "o";

function convertTemperature(event) {
  event.preventDefault(); // Prevent form submission

  var degreeInput = parseFloat(document.getElementById("degree").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var resultElement = document.getElementById("result");

  // Perform the conversion
  var result;
  var errorMessage;

  if (isNaN(degreeInput)) {
    errorMessage = "Invalid input. Please enter a valid number.";
  } else if (fromUnit === toUnit) {
    result = degreeInput; // No conversion needed if units are the same
    if (fromUnit === "celcius" || toUnit === "celcius") {
      unitSymbol.appendChild(unit);
      showResult.innerHTML = "C";
    } else if (fromUnit === "fahrenheit" || toUnit === "fahrenheit") {
      unitSymbol.appendChild(unit);
      showResult.innerHTML = "F";
    } else {
      showResult.innerHTML = "K";
    }
  } else if (fromUnit === "celcius" && toUnit === "fahrenheit") {
    result = (degreeInput * 9) / 5 + 32;
    unitSymbol.appendChild(unit);
    showResult.innerHTML = "F";
  } else if (fromUnit === "celcius" && toUnit === "kelvin") {
    result = degreeInput + 273.15;
    showResult.innerHTML = "K";
  } else if (fromUnit === "fahrenheit" && toUnit === "celcius") {
    result = ((degreeInput - 32) * 5) / 9;
    unitSymbol.appendChild(unit);
    showResult.innerHTML = "C";
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    result = ((degreeInput - 32) * 5) / 9 + 273.15;
    showResult.innerHTML = "K";
  } else if (fromUnit === "kelvin" && toUnit === "celcius") {
    result = degreeInput - 273.15;
    unitSymbol.appendChild(unit);
    showResult.innerHTML = "C";
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    result = ((degreeInput - 273.15) * 9) / 5 + 32;
    unitSymbol.appendChild(unit);
    showResult.innerHTML = "F";
  }

  // Display the result or error message
  if (errorMessage) {
    resultElement.innerText = errorMessage;
  } else {
    resultElement.innerText = result;
  }
}

var convForm = document.getElementById("conv-form");
convForm.addEventListener("submit", convertTemperature);