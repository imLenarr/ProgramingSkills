document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate-btn");
  const resultContainer = document.getElementById("result-container");
  const gradesContainer = document.getElementById("grades-container");
  const averagePercentage = document.getElementById("average-percentage");
  const gpaElement = document.getElementById("gpa");
  const totalCreditsElement = document.getElementById("total-credits");
  const errorMessage = document.getElementById("error-message");

  calculateBtn.addEventListener("click", function () {
    const scoreInputs = document.querySelectorAll(".score-input");
    const creditInputs = document.querySelectorAll(".credit-input");
    const courseIds = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];

    let isValid = true;
    let totalScore = 0;
    let totalWeightedGradePoints = 0;
    let totalCredits = 0;

    // Clear previous results
    gradesContainer.innerHTML = "";
    errorMessage.style.display = "none";

    // Check validation and calculate
    for (let i = 0; i < scoreInputs.length; i++) {
      const score = parseFloat(scoreInputs[i].value);
      const credits = parseInt(creditInputs[i].value);

      if (
        isNaN(score) ||
        score < 0 ||
        score > 100 ||
        isNaN(credits) ||
        credits < 1
      ) {
        isValid = false;
        errorMessage.style.display = "block";
        resultContainer.style.display = "none";
        return;
      }

      const grade = calculateGrade(score);
      const gradePoint = calculateGradePoint(grade);

      totalScore += score * credits;
      totalWeightedGradePoints += gradePoint * credits;
      totalCredits += credits;

      // Add grade to result
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

    if (isValid) {
      const avgPercentage = (totalScore / totalCredits).toFixed(2);
      const gpa = (totalWeightedGradePoints / totalCredits).toFixed(2);

      averagePercentage.textContent = avgPercentage + "%";
      gpaElement.textContent = gpa;
      totalCreditsElement.textContent = totalCredits;

      resultContainer.style.display = "block";
    }
  });

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
