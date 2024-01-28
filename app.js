const addForm = document.querySelector("form.add");
const ul = document.querySelector("ul.todos");
const searchFormInput = document.querySelector(".input");
const message = document.querySelector(".message-container");

//ADD NEW TODO
const handleAddItem = (inputValue) => {
  const html = `
      <li class="list-group-item">
          <span>${inputValue}</span>
          <i class="far fa-trash-alt delete"></i>
          </li>
      `;
  ul.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = addForm.add.value;
  if (inputValue.length) handleAddItem(inputValue);
  addForm.add.value = "";

  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 1000);
});

//REMOVE TODO
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  message.classList.toggle("error");
  message.textContent = "Item Deleted";

  setTimeout(() => {
    message.classList.toggle("error");
  }, 1000);
});

searchFormInput.parentElement.addEventListener("submit", (e) =>
  e.preventDefault()
);

//SEARCH AND FILTER TODOS
const filterItems = (value) => {
  Array.from(ul.children).forEach((li) => {
    if (!li.textContent.toLowerCase().includes(value))
      li.classList.add("filtred");
    else li.classList.remove("filtred");
  });
};

searchFormInput.addEventListener("keyup", (e) => {
  const value = searchFormInput.value.toLowerCase().trim();
  filterItems(value);
});
