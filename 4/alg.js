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
  let result = "";

  if (age <= 0) {
    result = "ไม่ได้จ้า";
  } else if (age < 13) {
    result = "เด็ก";
  } else if (age >= 13 && age <= 19) {
    result = "วัยรุ่น";
  } else {
    result = "แก่แล้ว";
  }
  document.getElementById("age-result").innerText = result;
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
  for (let i = 50; i >= 1; i--) {
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
    if (n === 0) {
      return 1;
    }
    return n === 1 ? 1 : n * factorial(n - 1);
  }

  let num = parseInt(document.getElementById("factorial-input").value);
  if (isNaN(num) || num < 0) {
    document.getElementById("factorial-result").innerText =
      "Please enter a valid positive number!";
  } else {
    document.getElementById("factorial-result").innerText =
      "Factorial: " + factorial(num);
  }
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
  console.log("เริ่มต้น Debugging Tools");

  // ตัวอย่าง Debugging Tools
  let x = 10;
  console.log("ค่าของ x:", x);

  let a = 5,
    b = 10;
  let sumDebug = a + b;
  debugger; // หยุดโค้ดที่บรรทัดนี้เมื่อใช้ DevTools เพื่อตรวจสอบค่า
  console.log("ผลรวมของ a + b:", sumDebug);

  console.log("สิ้นสุด Debugging Tools");

  console.log("เริ่มต้น Exception Handling");

  try {
    console.log("กำลังดำเนินการหาร...");
    let num = 10;
    let divisor = 0; // กำหนดตัวหารเป็น 0 ซึ่งอาจทำให้เกิดปัญหา
    if (divisor === 0) {
      throw new Error("ไม่สามารถหารด้วยศูนย์ได้!");
    }
    let result = num / divisor;
    console.log("ผลลัพธ์:", result);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  } finally {
    console.log("จบการทำงานของ try-catch-finally");
  }
}
