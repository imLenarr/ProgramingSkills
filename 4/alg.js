// ฟังก์ชันคำนวณพื้นที่ของวงกลม
function calculateArea() {
  let radius = document.getElementById("radius").value;
  // ใช้สูตร π * r^2
  let area = Math.PI * Math.pow(radius, 2);
  document.getElementById("circle-area-result").innerText =
    "Area: " + area.toFixed(2);
}

// ฟังก์ชันตรวจสอบอายุและกำหนดหมวดหมู่
function checkAge() {
  let age = document.getElementById("age").value;
  let category = age < 13 ? "เด็ก" : age < 20 ? "วัยรุ่น" : "ผู้ใหญ่";
  document.getElementById("age-result").innerText = "Category: " + category;
}

// ฟังก์ชันตรวจสอบเลขคู่หรือเลขคี่
function checkEvenOdd() {
  let number = document.getElementById("number").value;
  let result = number % 2 === 0 ? "Even" : "Odd";
  document.getElementById("even-odd-result").innerText = "Number is " + result;
}

// ฟังก์ชันแสดงหมายเลขจาก 1 ถึง 10
function showNumbers() {
  let result = "";
  // ใช้ลูป for เพื่อแสดงเลขจาก 1 ถึง 10
  for (let i = 1; i <= 10; i++) {
    result += i + " "; // เพิ่มหมายเลขที่กำลังแสดงในตัวแปร result
    console.log("Adding number:", i); // แสดงในคอนโซลว่าเลขที่กำลังเพิ่มคืออะไร
  }
  document.getElementById("loop-result").innerText = result;
}

// ฟังก์ชันสำหรับรับค่าจากผู้ใช้ในลูป while
function startInputLoop() {
  let result = "";
  // ใช้ลูป while เพื่อรับค่าจากผู้ใช้จนกว่าจะพิมพ์ 'exit'
  while (true) {
    let input = prompt("Enter a value (type 'exit' to stop):");
    // ถ้าผู้ใช้พิมพ์ 'exit' จะออกจากลูป
    if (input === "exit") {
      break;
    }
    result += input + " ";
  }
  document.getElementById("while-loop-result").innerText =
    "Entered values: " + result;
}

// ฟังก์ชันสำหรับการจัดเรียงสุ่ม
function sortArray() {
  // สร้างอาร์เรย์ที่ยาว 100 และมีค่าตัวเลขสุ่มจาก 0 ถึง 99
  let array = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  // จัดเรียงอาร์เรย์จากน้อยไปมาก
  array.sort((a, b) => a - b);
  document.getElementById("sort-result").innerText =
    "Sorted Array: " + array.join(", ");
}

// ฟังก์ชันคำนวณแฟค
function calculateFactorial() {
  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1); 
    // ถ้า n = 0 คืนค่า 1, ถ้าไม่คืนค่า n * factorial(n-1)
  }
  let num = document.getElementById("factorial-input").value;
  document.getElementById("factorial-result").innerText =
    "Factorial: " + factorial(num);
}

// ฟังก์ชันคำนวณลำดับฟีโบ
function calculateFibonacci() {
  function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   // ถ้า n <= 1 คืนค่า n, ถ้าไม่คืนค่า fibonacci(n-1) + fibonacci(n-2)
  }
  let num = document.getElementById("fibonacci-input").value;
  document.getElementById("fibonacci-result").innerText =
    "Fibonacci: " + fibonacci(num);
}

// ฟังก์ชันทดสอบการดีบัก (Debugging)
function testDebugging() {
  try {
    // แสดงข้อความในคอนโซลเพื่อบอกว่าเริ่มการดีบัก
    console.log("Debugging test started");
    // ขอให้ผู้ใช้กรอกข้อมูล
    let testValue = prompt("Enter a number:");
    // ถ้าผู้ใช้กรอกข้อมูลไม่ได้ จะแสดงข้อผิดพลาด
    if (!testValue) throw "Input cannot be empty!";
    // แปลงค่าที่ผู้ใช้กรอกเป็นตัวเลข
    let num = parseFloat(testValue);
    // ถ้าค่าที่กรอกไม่ใช่ตัวเลข จะแสดงข้อผิดพลาด
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
