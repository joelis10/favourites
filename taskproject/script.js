const addingtask = document.getElementById("add-task");
const container = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addingtask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add("checkTask");
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("deleteTask");
  task.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    container.appendChild(task);
  }

  inputTask.value = "";

  checkBtn.addEventListener("click", function () {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", function (event) {
    let target = event.target
    target.parentElement.closest('.task').remove();
  });
});
