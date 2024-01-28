const task = document.querySelector("#task");
const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");
const message = document.querySelector(".message-container");

//Add new todo

const handleAddItem = (inputValue) => {
  const html = `<li class="list-items">
  <span>$(inputValue)</span>
  <i class="fa-solid fa-trash"></i>
</li>`;
  ul.innerText += html;
};

task.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = task.add.value;
  if (inputValue.length) handleAddItem(inputValue);
  task.add.value = "";
});
