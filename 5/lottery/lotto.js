document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const lotteryBox = document.getElementById("lottery-box");
  const lotteryNumber = document.getElementById("lottery-number");
  const checkBtn = document.getElementById("check-btn");
  const guessInput = document.getElementById("guess-input");
  const resultDiv = document.getElementById("result");
  const historyList = document.getElementById("history-list");

  // Variables
  let history = JSON.parse(localStorage.getItem("lotteryHistory")) || [];

  // Initialize
  renderHistory();

  // Generate random 6-digit number
  function generateLotteryNumber() {
    let randomNumber = "";
    for (let i = 0; i < 6; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
  }

  // Check if the guess matches the generated number
  function checkGuess() {
    const guess = guessInput.value;

    // Validate input
    if (guess.length !== 6 || !/^\d+$/.test(guess)) {
      alert("กรุณาใส่เลข 6 หลัก");
      return;
    }

    // Generate a number after the user inputs a guess
    const winningNumber = generateLotteryNumber();
    lotteryNumber.textContent = winningNumber;

    // Check if guess matches
    const isWinner = guess === winningNumber;

    // Display result
    resultDiv.className = isWinner ? "result win" : "result lose";
    resultDiv.innerHTML = isWinner
      ? `<h3>🎉 ยินดีด้วย! คุณถูกรางวัล 🎉</h3><div class="result-details">เลขที่ออก: ${winningNumber}</div>`
      : `<h3>เสียใจด้วย! คุณไม่ถูกรางวัล</h3><div class="result-details">เลขที่ออก: ${winningNumber}<br>เลขที่คุณทาย: ${guess}</div>`;
    resultDiv.style.display = "block";

    // Add to history
    const historyItem = {
      timestamp: new Date().toISOString(),
      guess: guess,
      winning: winningNumber,
      isWinner: isWinner,
    };

    history.unshift(historyItem);
    if (history.length > 10) history.pop(); // Keep only latest 10 entries

    // Save history to localStorage
    localStorage.setItem("lotteryHistory", JSON.stringify(history));

    // Update history display
    renderHistory();
  }

  // Render history items
  function renderHistory() {
    if (history.length === 0) {
      historyList.innerHTML = '<div class="history-item">ยังไม่มีประวัติการทาย</div>';
      return;
    }

    historyList.innerHTML = "";
    history.forEach((item) => {
      const date = new Date(item.timestamp);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;

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
      historyList.appendChild(historyItem);
    });
  }

  // Event Listeners
  checkBtn.addEventListener("click", checkGuess);

  // Allow Enter key to submit
  guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkGuess();
    }
  });
});
