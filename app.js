const addForm = document.querySelector("form.add");
const ul = document.querySelector("ul.todos");
const searchFormInput = document.querySelector("form.search input");
const message = document.querySelector(".message-container");

//ADD NEW TODO
const handleAddItem = (inputValue) => {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
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
  }, 2000);
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
  }, 2000);
});
