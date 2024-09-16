const form = document.querySelector("form");
const item = document.getElementById("add-item");
const items = document.getElementById("itens-list");
const deleteAlert = document.getElementById("delete-alert");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  items(item.value)
});


function items(valor){

    console.log(valor)
}