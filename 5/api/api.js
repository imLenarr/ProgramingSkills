fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // แปลงข้อมูลที่ได้รับจาก API เป็น JSON
  .then((users) => {
    // แปลงสำเร็จจะเข้าไปใน.then เพื่อดึงข้อมูลผู้ใช้
    const userDataContainer = document.getElementById("user-data");

    // ลูปข้อมูลผู้ใช้
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.style.marginBottom = "20px";
      userDiv.style.border = "1px solid #ddd";
      userDiv.style.padding = "10px";
      // แสดงข้อมูลของผู้ใช้ เช่น ชื่อ, อีเมล, ที่อยู่
      userDiv.innerHTML = `
                        <strong>Name:</strong> ${user.name}<br>
                        <strong>Email:</strong> ${user.email}<br>
                        <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}<br><br>
                    `;
      // เพิ่มข้อมูลผู้ใช้ลงใน container (userDataContainer)
      userDataContainer.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
  });
