// 1. สร้าง Array
let fruits = ["Apple", "Banana", "Orange"];

// 2. แสดงผล Array
console.log("Fruits Array:", fruits);

// 3. เพิ่มข้อมูล
fruits.push("Grapes"); // เพิ่ม "Grapes" ที่ท้าย
console.log("After Adding Grapes:", fruits);

// 4. ลบข้อมูล
fruits.splice(1, 1); // ลบ "Banana" (Index 1)
console.log("After Removing Banana:", fruits);

// 5. แก้ไขข้อมูล
fruits[1] = "Mango"; // แก้ไขจาก "Orange" เป็น "Mango"
console.log("After Modifying Orange to Mango:", fruits);

// Dictionary / Object → เก็บข้อมูลนักเรียน

// 1. สร้าง Object (Dictionary)
let student = {
  name: "Tom",
  age: 20,
  grade: "A",
};

// 2. แสดงผล Object
console.log("Student Object:", student);

// 3. การเข้าถึงค่าใน Object
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Grade:", student.grade);

// 4. การแก้ไขค่าใน Object
student.grade = "B"; // เปลี่ยนเกรดเป็น "B"
console.log("Updated Student Object:", student);

// Tuple
// 1. สร้าง Tuple (จริง ๆ เป็น Array ใน JavaScript)
let tuple = ["Tom", 20, "A"];
console.log("Tuple:", tuple);

// Set → ใช้ Set เพื่อกำจัดค่าที่ซ้ำกัน
// 1. สร้าง Set
let numbersSet = new Set([1, 2, 3, 3, 4, 4, 5]);

// 2. แสดงผล Set (ค่าที่ซ้ำกันจะถูกลบออก)
console.log("Set (No duplicates):", numbersSet);


// --------------------------

// การสร้างตัวแปรเก็บ String, Integer, Boolean และแสดงผล

// 1. สร้างตัวแปร
let name = "Tom"; // String
let age = 20; // Integer
let isStudent = true; // Boolean

// 2. แสดงผล
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// การแปลงชนิดข้อมูล

// 1. แปลง string เป็น number (Integer)
let numFromString = parseInt("10");
console.log("Converted Integer:", numFromString);

// 2. แปลง string เป็น float
let floatFromString = parseFloat("3.14");
console.log("Converted Float:", floatFromString);

// 3. แปลง number เป็น string
let stringFromNumber = String(100);
console.log("Converted String:", stringFromNumber);


// -------------------------------

const fs = require("fs");

// 1. การแปลงจาก JSON string เป็น JavaScript object (โดยใช้ JSON.parse)
const jsonString = '{"name": "Tom", "age": 20, "grade": "A"}';

// แปลงจาก JSON string เป็น JavaScript object
const data = JSON.parse(jsonString);

console.log("JSON to JavaScript Object:");
console.log(data);
console.log("Name:", data.name);
console.log("Age:", data.age);
console.log("Grade:", data.grade);

// 2. การแปลงจาก JavaScript object เป็น JSON string (โดยใช้ JSON.stringify)
const pythonDict = {
  name: "Tom",
  age: 20,
  grade: "A",
};

// แปลงจาก JavaScript object เป็น JSON string
const jsonData = JSON.stringify(pythonDict, null, 4);

console.log("\nJavaScript Object to JSON String:");
console.log(jsonData);

// 3. การเขียนข้อมูลลงในไฟล์ JSON
fs.writeFile("data.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("\nData written to data.json");
});
