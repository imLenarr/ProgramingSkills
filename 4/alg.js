function calculateArea() {
   let radius = document.getElementById("radius").value;
   let area = Math.PI * Math.pow(radius, 2);
   document.getElementById("circle-area-result").innerText = "Area: " + area.toFixed(2);
}

function checkAge() {
   let age = document.getElementById("age").value;
   let category = age < 13 ? "เด็ก" : age < 20 ? "วัยรุ่น" : "ผู้ใหญ่";
   document.getElementById("age-result").innerText = "Category: " + category;
}

function checkEvenOdd() {
   let number = document.getElementById("number").value;
   let result = number % 2 === 0 ? "Even" : "Odd";
   document.getElementById("even-odd-result").innerText = "Number is " + result;
}

function showNumbers() {
   let result = "";
   for (let i = 1; i <= 10; i++) {
      result += i + " ";
      console.log("Adding number:", i);
   }
   document.getElementById("loop-result").innerText = result;
}


function startInputLoop() {
   let result = "";
   while (true) {
      let input = prompt("Enter a value (type 'exit' to stop):");
      if (input === "exit") {
         break;
      }
      result += input + " ";
   }
   document.getElementById("while-loop-result").innerText = "Entered values: " + result;
}

function sortArray() {
   let array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
   array.sort((a, b) => a - b);
   document.getElementById("sort-result").innerText = "Sorted Array: " + array.join(", ");
}

function calculateFactorial() {
   function factorial(n) {
      return n === 0 ? 1 : n * factorial(n - 1);
   }
   let num = document.getElementById("factorial-input").value;
   document.getElementById("factorial-result").innerText = "Factorial: " + factorial(num);
}

function calculateFibonacci() {
   function fibonacci(n) {
      return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   }
   let num = document.getElementById("fibonacci-input").value;
   document.getElementById("fibonacci-result").innerText = "Fibonacci: " + fibonacci(num);
}

function testDebugging() {
   try {
      console.log("Debugging test started");
      let testValue = prompt("Enter a number:");
      if (!testValue) throw "Input cannot be empty!";
      let num = parseFloat(testValue);
      if (isNaN(num)) throw "Not a valid number!";
      console.log("User entered:", num);
      document.getElementById("debug-result").innerText = "Valid input: " + num;
   } catch (error) {
      console.error("Error caught:", error);
      alert("Error: " + error);
   } finally {
      console.log("Debugging test finished");
   }
}
