document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input"); // กรอกข้อมูล
  const addButton = document.getElementById("add-button"); // เพิ่ม To-Do
  const todoList = document.getElementById("todo-list"); // แสดงรายการ 
  const filterButtons = document.querySelectorAll(".filter-btn"); // ปุ่มกรอง ทั้งหมด เสร็จสิ้น ยังไม่เสร็จ
  let currentFilter = "all"; // กรองรายการปัจจุบัน
  // โหลดข้อมูล To-Do จาก localStorage ถ้ามี
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  renderTodos();

  // Event Listeners
  addButton.addEventListener("click", addTodo); // เมื่อคลิกปุ่มเพิ่ม To-Do
  todoInput.addEventListener("keypress", function (e) { // เมื่อกด Enter ในช่องกรอกข้อมูล
    if (e.key === "Enter") {
      addTodo(); // เพิ่มรายการเมื่อกด Enter
    }
  });

  // การกรองรายการ
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // ลบ
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // เพิ่ม
      this.classList.add("active");
      // filter
      currentFilter = this.getAttribute("data-filter");
      renderTodos(); // เรียกฟังก์ชัน renderTodos เพื่อfilter ข้อมูล
    });
  });

  // เพิ่มรายการ
  function addTodo() {
    const todoText = todoInput.value.trim(); // ดึงข้อมูลที่กรอกเข้ามา
    if (todoText === "") return; // ถ้าข้อความว่าง ให้ไม่ทำอะไร

    // สร้างรายการใหม่
    const newTodo = {
      id: Date.now(), // ใช้เวลาปัจจุบัน
      text: todoText, // ข้อความ
      completed: false, // ตั้งสถานะเริ่มต้นเป็นยังไม่เสร็จ
      createdAt: new Date().toISOString(), // เวลาที่สร้าง
    };

    todos.push(newTodo); // เพิ่มรายการใหม่เข้าไป
    saveTodos(); // บันทึกลงใน localStorage
    renderTodos(); // แสดงผล
    todoInput.value = ""; // เคลียร์ช่องกรอก
    todoInput.focus(); // ตั้งโฟกัสที่ช่องกรอก
  }

  // ฟังก์ชันลบ
  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id); // ลบรายการที่มี id ตรงกัน
    saveTodos(); // บันทึกใหม่ลงใน localStorage
    renderTodos(); // แสดงผลหลังจากลบ
  }

  // ฟังก์ชันเปลี่ยนสถานะ
  function toggleTodoStatus(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // เปลี่ยนสถานะเสร็จหรือยัง
      }
      return todo;
    });
    saveTodos(); 
    renderTodos(); // แสดงผลหลังจากเปลี่ยน
  }

  // ฟังก์ชันบันทึกลงใน localStorage
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos)); // บันทึกข้อมูล
  }
  // ฟังก์ชันแสดงผลทั้งหมด หรือกรองตามสถานะ
  function renderTodos() {
    // กรองรายการตาม filter ที่เลือก
    let filteredTodos = todos;
    if (currentFilter === "active") {
      filteredTodos = todos.filter((todo) => !todo.completed); // กรองเฉพาะที่ยังไม่เสร็จ
    } else if (currentFilter === "completed") {
      filteredTodos = todos.filter((todo) => todo.completed); // กรองเฉพาะที่เสร็จ
    }

    // ล้างรายการเก่าทั้งหมด
    todoList.innerHTML = "";

    // หากไม่มีรายการให้แสดงข้อความว่าไม่มี
    if (filteredTodos.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-list";
      if (currentFilter === "all") {
        emptyMessage.textContent = "ไม่มีรายการ - เพิ่มรายการใหม่";
      } else if (currentFilter === "active") {
        emptyMessage.textContent = "ไม่มีรายการที่ยังไม่เสร็จ";
      } else {
        emptyMessage.textContent = "ไม่มีรายการที่เสร็จสิ้น";
      }
      todoList.appendChild(emptyMessage);
      return;
    }

    // วนลูปแสดงผลที่กรองมาแล้ว
    filteredTodos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.setAttribute("data-id", todo.id);

      // แสดงข้อความ
      const todoText = document.createElement("span");
      todoText.className = "todo-text";
      if (todo.completed) {
        todoText.classList.add("completed"); // ถ้าเสร็จสิ้นแล้ว ให้ทำให้ข้อความขีดทับ
      }
      todoText.textContent = todo.text;

      // สร้างปุ่มสำหรับทำงาน
      const actionButtons = document.createElement("div");
      actionButtons.className = "action-buttons";

      // ปุ่มสำหรับเปลี่ยนสถานะ
      const completeButton = document.createElement("button");
      completeButton.className = "complete-btn";
      completeButton.innerHTML = todo.completed ? "&#8592;" : "&#9989;";
      completeButton.title = todo.completed ? "ทำใหม่" : "เสร็จสิ้น";
      completeButton.addEventListener("click", () => toggleTodoStatus(todo.id));

      // ปุ่มลบ
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.innerHTML = "&#10060;";
      deleteButton.title = "ลบ";
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));

      actionButtons.appendChild(completeButton);
      actionButtons.appendChild(deleteButton);

      todoItem.appendChild(todoText);
      todoItem.appendChild(actionButtons);

      todoList.appendChild(todoItem);
    });
  }
});
