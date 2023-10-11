function reverseAndDisplay() {
    const inputNumber = parseFloat(document.getElementById('numberInput1').value);
    const resultDiv = document.getElementById('result1');
    if (!isNaN(inputNumber)) {
      const reversedResult = inputNumber.toString().split('').reverse().join('');
      resultDiv.textContent = "Reversed number: " + reversedResult;
    } else {
      resultDiv.textContent = "Invalid input. Please enter a valid number.";
    }
  }

  function sortAlphabetically() {
    const inputString = document.getElementById('stringInput').value;
    const resultDiv = document.getElementById('result2');
    const sortedString = inputString.split('').sort().join('');
    resultDiv.textContent = "Sorted string: " + sortedString;
  }

  function calculateArea() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const resultDiv = document.getElementById('result3');
    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
      const s = (sideA + sideB + sideC) / 2;
      const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
      resultDiv.textContent = "The area of the triangle is: " + area;
    } else {
      resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
  }

  function multiplyAndDivide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result4');
    if (!isNaN(num1) && !isNaN(num2)) {
      const multiplicationResult = num1 * num2;
      let divisionResult = "Division by zero is not allowed.";
      if (num2 !== 0) {
        divisionResult = num1 / num2;
      }
      resultDiv.textContent = `Multiplication Result: ${multiplicationResult}, Division Result: ${divisionResult}`;
    } else {
      resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
  }

  function swapValues() {
    const aValue = parseFloat(document.getElementById('aInput').value);
    const bValue = parseFloat(document.getElementById('bInput').value);
    const resultDiv = document.getElementById('result5');
    if (!isNaN(aValue) && !isNaN(bValue)) {
      resultDiv.textContent = `Before swapping: a = ${aValue}, b = ${bValue}`;
      [aValue, bValue] = [bValue, aValue]; // Swapping logic
      resultDiv.textContent += `\nAfter swapping: a = ${aValue}, b = ${bValue}`;
    } else {
      resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
  }

  function capitalizeFirstLetter() {
    const inputString = document.getElementById('stringToCapitalize').value;
    const resultDiv = document.getElementById('result6');
    if (inputString.length === 0) {
      resultDiv.textContent = "Please enter a string.";
    } else {
      const firstLetter = inputString.charAt(0);
      const restOfString = inputString.slice(1);
      const capitalizedString = firstLetter.toUpperCase() + restOfString;
      resultDiv.textContent = "Capitalized string: " + capitalizedString;
    }
  }

  function calculateFactorial() {
    const number = parseInt(document.getElementById('numberForFactorial').value);
    const resultDiv = document.getElementById('result7');
    if (!isNaN(number) && number >= 0) {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      resultDiv.textContent = `Factorial of ${number} is: ${factorial}`;
    } else {
      resultDiv.textContent = "Invalid input. Please enter a non-negative number.";
    }
  }

  function countRepetitions() {
    const inputWord = document.getElementById('wordToCount').value.toLowerCase();
    const letterToCount = document.getElementById('letterToCount').value.toLowerCase();
    const resultDiv = document.getElementById('result8');
    if (letterToCount.length === 1) {
      let count = 0;
      for (let i = 0; i < inputWord.length; i++) {
        if (inputWord[i] === letterToCount) {
          count++;
        }
      }
      resultDiv.textContent = `Number of "${letterToCount}" in "${inputWord}": ${count}`;
    } else {
      resultDiv.textContent = "Invalid input. Please enter a single letter.";
    }
  }