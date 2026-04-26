const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "✕";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});