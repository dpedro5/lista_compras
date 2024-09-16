const form = document.querySelector("form");
const item = document.getElementById("add-item");
const item_lista = document.getElementById("itens-list");
const deleteAlert = document.getElementById("delete-alert");

let item_id = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  item_id = items(item.value, item_id);
  item.value = '';

});

function items(valor, id) {
  //console.log(`Este é o ${valor} e aqui tem o id: ${id}`);

  const div = document.createElement("div");
  div.classList.add("item");
  div.setAttribute("id", "item-" + item_id);
  div.innerHTML = `<input type="checkbox" class="checkbox" id="checkbox-${item_id}"> 
    <label for="checkbox-${item_id}">${valor}</label> 
    <button type="button "class="delete-button"onclick="itemDelete('${div.id}')"></button> `;
  item_lista.append(div);
  item_id++;
  return item_id;
}

item_lista.addEventListener('submit', (e)=>{
    e.preventDefault();
})

function itemDelete(id){
    const eliminar_id = document.getElementById(id);
    eliminar_id.remove();
}