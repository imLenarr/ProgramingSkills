// Function to change background color
function changeBackgroundColor() {
   const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];
   document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
}

// Section 2: Event Handling
// onclick
document.getElementById("clickBtn").onclick = function () {
   document.getElementById("message").textContent = "คุณได้คลิกปุ่ม!";
};

// onmouseover
document.getElementById("hoverArea").onmouseover = function () {
   this.style.backgroundColor = "#d1e7dd";
   document.getElementById("message").textContent =
      "คุณเลื่อนเมาส์มาที่พื้นที่!";
};

document.getElementById("hoverArea").onmouseout = function () {
   this.style.backgroundColor = "#f0f0f0";
};

// onkeyup
document.getElementById("keyInput").onkeyup = function () {
   document.getElementById("message").textContent =
      "คุณพิมพ์: " + this.value;
};

// addEventListener
document
   .getElementById("addEventBtn")
   .addEventListener("click", function () {
      document.getElementById("message").textContent =
         "ทดสอบ addEventListener สำเร็จ!";
      this.style.backgroundColor = "#007bff";

      // กลับไปเป็นสีเดิมหลังจาก 1 วินาที
      setTimeout(() => {
         this.style.backgroundColor = "#4CAF50";
      }, 1000);
   });

// Section 3: Form Validation
document
   .getElementById("registrationForm")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      // ตรวจสอบชื่อ
      if (name === "") {
         document.getElementById("nameError").style.display = "block";
         isValid = false;
      } else {
         document.getElementById("nameError").style.display = "none";
      }

      // ตรวจสอบอีเมล
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
      if (!emailRegex.test(email)) {
         document.getElementById("emailError").style.display = "block";
         isValid = false;
      } else {
         document.getElementById("emailError").style.display = "none";
      }

      // ถ้าข้อมูลถูกต้องทั้งหมด
      if (isValid) {
         document.getElementById("successMessage").style.display = "block";
         this.reset(); // รีเซ็ตฟอร์ม

         // ซ่อนข้อความสำเร็จหลังจาก 3 วินาที
         setTimeout(function () {
            document.getElementById("successMessage").style.display = "none";
         }, 3000);
      }
   });
