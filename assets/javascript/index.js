const form = document.querySelector(".form");
const formInput = document.querySelector(".form_input");
const todoContainer = document.querySelector(".todo_lists");
const todoList = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formInput.value === "") return;
  todoList.push({
    id: Date.now(),
    text: formInput.value,
  });
  todoContainer.innerHTML = "";
  todoList.forEach((value, key) => {
    todoContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="todo_list" data-id="${value.id}">
    <div class="todo_content">
      <span class="todo_num">${key + 1}</span>
      <p class="todo_text">${value.text}</p>
    </div>
    <div class="todo_icons">
    <div class="todos_check">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="todo_icon todo_check"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 13.5l6.75 6.75L21 4.5"
        />
      </svg>
      </div>
      <div class="todos_remove">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="todo_icon todo_remove"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
      </div>
    </div>
    </div>`
    );
  });
  formInput.value = "";
  formInput.blur();
});
todoContainer.addEventListener("click", (e) => {
  const elementCheck = e.target.closest(".todos_check");
  const elementRemove = e.target.closest(".todos_remove");
  if (!elementCheck && !elementRemove) {
    return;
  }

  if (elementCheck) {
    elementCheck
      .closest(".todo_icons")
      .closest(".todo_list")
      .classList.add("check");
  }
  if (elementRemove) {
    const id = +elementRemove.closest(".todo_icons").closest(".todo_list")
      .dataset.id;
    const elementIndex = todoList.findIndex((val) => val.id === id);
    todoList.splice(elementIndex, 1);
    todoContainer.innerHTML = "";
    todoList.forEach((value, key) => {
      todoContainer.insertAdjacentHTML(
        "afterbegin",
        `<div class="todo_list" data-id="${value.id}">
      <div class="todo_content">
        <span class="todo_num">${key + 1}</span>
        <p class="todo_text">${value.text}</p>
      </div>
      <div class="todo_icons">
      <div class="todos_check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="todo_icon todo_check"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.5l6.75 6.75L21 4.5"
          />
        </svg>
        </div>
        <div class="todos_remove">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="todo_icon todo_remove"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        </div>
      </div>
      </div>`
      );
    });
  }
});
