    // การทดสอบฟังก์ชัน Array
    document.getElementById("test-array").addEventListener("click", function () {
      let fruits = ["Apple", "Banana", "Orange"];
      console.log("Fruits Array:", fruits);
      fruits.push("Grapes"); // เพิ่ม "Grapes"
      console.log("After Adding Grapes:", fruits);
      fruits.splice(1, 1); // ลบ "Banana" ที่ index 1
      console.log("After Removing Banana:", fruits);
      fruits[1] = "Mango"; // แก้ไข "Orange" เป็น "Mango"
      console.log("After Modifying Orange to Mango:", fruits);
    });

    // การทดสอบฟังก์ชัน Object (Dictionary)
    document.getElementById("test-object").addEventListener("click", function () {
      let student = { name: "Tom", age: 20, grade: "A" };
      console.log("Student Object:", student);
      console.log("Student Name:", student.name);
      console.log("Student Age:", student.age);
      console.log("Student Grade:", student.grade);
      student.grade = "B"; // เปลี่ยนเกรดจาก "A" เป็น "B"
      console.log("Updated Student Object:", student);
    });

    // การทดสอบ Tuple (โดยใช้ Array)
    document.getElementById("test-tuple").addEventListener("click", function () {
      let tuple = ["Tom", 20, "A"];
      console.log("Tuple:", tuple);
    });

    // การทดสอบ Set (ไม่มีค่าซ้ำ)
    document.getElementById("test-set").addEventListener("click", function () {
      let numbersSet = new Set([1, 2, 3, 3, 4, 4, 5]);
      console.log("Set (No duplicates):", numbersSet);
    });

    // การทดสอบตัวแปร
    document.getElementById("test-variable").addEventListener("click", function () {
      let name = "Tom"; // String
      let age = 20; // Integer
      let isStudent = true; // Boolean
      console.log("Name:", name);
      console.log("Age:", age);
      console.log("Is Student:", isStudent);
    });

    // การแปลงชนิดข้อมูล
    document.getElementById("test-conversion").addEventListener("click", function () {
      let numFromString = parseInt("10"); // แปลงจาก string เป็น integer
      console.log("Converted Integer:", numFromString);
      let floatFromString = parseFloat("3.14"); // แปลงจาก string เป็น float
      console.log("Converted Float:", floatFromString);
      let stringFromNumber = String(100); // แปลงจาก number เป็น string
      console.log("Converted String:", stringFromNumber);
    });

    // การทดสอบการแปลง JSON
    document.getElementById("test-json").addEventListener("click", function () {
      const jsonString = '{"name": "Tom", "age": 20, "grade": "A"}';
      const data = JSON.parse(jsonString); // แปลงจาก JSON string เป็น JavaScript object
      console.log("JSON to JavaScript Object:");
      console.log(data);
      console.log("Name:", data.name);
      console.log("Age:", data.age);
      console.log("Grade:", data.grade);

      const pythonDict = { name: "Tom", age: 20, grade: "A" };
      const jsonData = JSON.stringify(pythonDict, null, 4); // แปลงจาก JavaScript object เป็น JSON string
      console.log("\nJavaScript Object to JSON String:");
      console.log(jsonData);
    });