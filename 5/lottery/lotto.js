document.addEventListener("DOMContentLoaded", function () {
  const lotteryBox = document.getElementById("lottery-box"); // กล่องที่แสดงหมายเลขลอตเตอรี่
  const lotteryNumber = document.getElementById("lottery-number"); // เลขที่ออก
  const checkBtn = document.getElementById("check-btn"); // ปุ่มการตรวจสอบการทาย
  const guessInput = document.getElementById("guess-input"); // เลขที่ทาย
  const resultDiv = document.getElementById("result"); // ผลการทาย
  const historyList = document.getElementById("history-list"); // ประวัติการทาย

  // ตัวแปรเก็บประวัติการทายที่ดึงจาก localStorage หรือกำหนดเป็นอาร์เรย์ว่างหากไม่พบ
  let history = JSON.parse(localStorage.getItem("lotteryHistory")) || [];
  // เริ่มต้นการแสดงประวัติ
  renderHistory();

  // ฟังก์ชันในการสร้างหมายเลขลอตเตอรี่ 6 หลักแบบสุ่ม
  function generateLotteryNumber() {
    let randomNumber = "";
    for (let i = 0; i < 6; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
  }

  // ฟังก์ชันตรวจสอบการทาย
  function checkGuess() {
    const guess = guessInput.value; // เก็บค่าทายของผู้ใช้

    // ตรวจสอบความถูกต้องของข้อมูล (ต้องเป็นตัวเลข 6 หลัก)
    if (guess.length !== 6 || !/^\d+$/.test(guess)) {
      alert("กรุณาใส่เลข 6 หลัก"); // แจ้งเตือนหากผู้ใช้ไม่กรอกตัวเลข 6 หลัก
      return;
    }

    // สร้างเลขลอตเตอรี่เมื่อผู้ใช้กดปุ่ม
    const winningNumber = generateLotteryNumber();
    lotteryNumber.textContent = winningNumber; // แสดงเลขที่ออก
    // ตรวจสอบ
    const isWinner = guess === winningNumber;
    // แสดงผลลัพธ์การทาย
    resultDiv.className = isWinner ? "result win" : "result lose";
    resultDiv.innerHTML = isWinner
      ? `<h3>🎉 ยินดีด้วย! คุณถูกรางวัล 🎉</h3><div class="result-details">เลขที่ออก: ${winningNumber}</div>`
      : `<h3>เสียใจด้วย! คุณไม่ถูกรางวัล</h3><div class="result-details">เลขที่ออก: ${winningNumber}<br>เลขที่คุณทาย: ${guess}</div>`;
    resultDiv.style.display = "block";

    // เพิ่มข้อมูลการทายลงในประวัติ
    const historyItem = {
      timestamp: new Date().toISOString(), // เวลาที่ทาย
      guess: guess, // เลขที่ทาย
      winning: winningNumber, // เลขที่ออก
      isWinner: isWinner, // ผลลัพธ์ (ถูกรางวัลหรือไม่)
    };

    history.unshift(historyItem); // เพิ่มข้อมูลที่ทายใหม่ไปข้างหน้า
    if (history.length > 10) history.pop(); // เก็บประวัติการทายแค่ 10 รายการล่าสุด
    // บันทึกประวัติการทายลงใน localStorage
    localStorage.setItem("lotteryHistory", JSON.stringify(history));
    // อัปเดตการแสดงผลประวัติการทาย
    renderHistory();
  }

  // ฟังก์ชันในการแสดงประวัติการทาย
  function renderHistory() {
    if (history.length === 0) {
      historyList.innerHTML =
        '<div class="history-item">ยังไม่มีประวัติการทาย</div>'; // ถ้ายังไม่มีประวัติการทาย
      return;
    }

    historyList.innerHTML = ""; // ล้างประวัติเดิม
    history.forEach((item) => {
      const date = new Date(item.timestamp); // แปลง timestamp เป็นวันที่
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

      // สร้าง HTML สำหรับแต่ละรายการในประวัติการทาย
      const historyItem = document.createElement("div");
      historyItem.className = "history-item";
      historyItem.innerHTML = `
              <div>
                  <span>${formattedDate}</span> - 
                  <span>ทาย: ${item.guess}</span>
              </div>
              <div class="win-indicator ${item.isWinner ? "win" : "lose"}">
                  ${item.isWinner ? "ถูกรางวัล!" : "ไม่ถูก"}
              </div>
          `;
      historyList.appendChild(historyItem); // เพิ่มรายการประวัติลงในหน้าจอ
    });
  }
  // Event Listeners
  checkBtn.addEventListener("click", checkGuess); // เมื่อคลิกปุ่มให้ตรวจสอบการทาย
  // รองรับการกดEnter
  guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkGuess();
    }
  });
});
