document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate-btn"); // คำนวณ
  const resultContainer = document.getElementById("result-container"); // ผลลัพธ์
  const gradesContainer = document.getElementById("grades-container"); // ผลเกรดของแต่ละวิชา
  const averagePercentage = document.getElementById("average-percentage"); // %เฉลี่ย
  const gpaElement = document.getElementById("gpa"); // GPA
  const totalCreditsElement = document.getElementById("total-credits"); // หน่วยกิตรวม
  const errorMessage = document.getElementById("error-message"); // ข้อผิดพลาด

  calculateBtn.addEventListener("click", function () {
    const scoreInputs = document.querySelectorAll(".score-input");
    const creditInputs = document.querySelectorAll(".credit-input");
    const courseIds = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];

    let isValid = true; // ตัวแปรสำหรับตรวจสอบความถูกต้องของข้อมูล
    let totalScore = 0; // ตัวแปรเก็บคะแนนรวม
    let totalWeightedGradePoints = 0; // ตัวแปรเก็บคะแนนเกรดรวมและหน่วยกิต
    let totalCredits = 0; // ตัวแปรเก็บหน่วยกิตรวม

    // ลบข้อมูลผลลัพธ์ก่อนหน้าทิ้ง
    gradesContainer.innerHTML = "";
    errorMessage.style.display = "none"; // ซ่อนข้อความข้อผิดพลาด

    // ตรวจสอบข้อมูลและคำนวณ
    for (let i = 0; i < scoreInputs.length; i++) {
      const score = parseFloat(scoreInputs[i].value); // แปลงคะแนนเป็นตัวเลข
      const credits = parseInt(creditInputs[i].value); // แปลงหน่วยกิตเป็นตัวเลข

      if (
        isNaN(score) || // ถ้าคะแนนไม่ใช่ตัวเลข
        score < 0 || score > 100 || // ถ้าคะแนนอยู่นอกช่วง 0-100
        isNaN(credits) || // ถ้าหน่วยกิตไม่ใช่ตัวเลข
        credits < 1 // ถ้าหน่วยกิตน้อยกว่า 1
      ) {
        isValid = false; 
        errorMessage.style.display = "block"; 
        resultContainer.style.display = "none"; // ซ่อนผลลัพธ์
        return; // ออกจากฟังก์ชันเพื่อไม่ให้คำนวณต่อ
      }

      // คำนวณเกรดและคะแนนที่ได้
      const grade = calculateGrade(score); // คำนวณเกรด
      const gradePoint = calculateGradePoint(grade); // คำนวณคะแนน
      // คำนวณหน่วยกิต
      totalScore += score * credits; 
      totalWeightedGradePoints += gradePoint * credits; 
      totalCredits += credits; 

      const gradeRow = document.createElement("div");
      gradeRow.className = "result-row";
      gradeRow.innerHTML = `
              <span class="result-label">${
                courseIds[i]
              } (${credits} หน่วยกิต):</span>
              <span class="result-value">${score.toFixed(
                1
              )} คะแนน - เกรด ${grade}</span>
          `;
      gradesContainer.appendChild(gradeRow); 
    }

    // ถ้าข้อมูลถูกต้องทั้งหมด คำนวณและแสดงผลลัพธ์
    if (isValid) {
      const avgPercentage = (totalScore / totalCredits).toFixed(2); // คำนวณ%
      const gpa = (totalWeightedGradePoints / totalCredits).toFixed(2); // PA

      averagePercentage.textContent = avgPercentage + "%"; // แสดง%
      gpaElement.textContent = gpa; // แสดงGPA
      totalCreditsElement.textContent = totalCredits; // แสดงหน่วยกิตรวม
      resultContainer.style.display = "block"; // แสดงผลลัพธ์
    }
  });

  // ฟังก์ชันคำนวณเกรดจากคะแนน
  function calculateGrade(score) {
    if (score >= 80) return "A"; 
    if (score >= 75) return "B+"; 
    if (score >= 70) return "B"; 
    if (score >= 65) return "C+"; 
    if (score >= 60) return "C"; 
    if (score >= 55) return "D+"; 
    if (score >= 50) return "D"; 
    return "F"; 
  }

  // ฟังก์ชันคำนวณคะแนนเกรดจากเกรด
  function calculateGradePoint(grade) {
    const gradePoints = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
      F: 0.0,
    };

    return gradePoints[grade]; 
  }
});
