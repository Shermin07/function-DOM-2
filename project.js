function handlerClick(target){
const itemName = target.parentNode.childNodes [1].innerText;
const li = document.createElement("li");
li.innerText = itemName;

const selectedItems = document.getElementById("selected-items");

selectedItems.appendChild(li);

}