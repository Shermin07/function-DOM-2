let total = 0;
function handlerClick(target){
    const selectedItems = document.getElementById("selected-items");
const itemName = target.parentNode.childNodes [1].innerText;
const li = document.createElement("li");
 
li.innerText = itemName;



selectedItems.appendChild(li);

const price = target.parentNode.childNodes[5].innerText.split(" ")[1];

total = parseInt(total) + parseInt(price);

const totalAmount = document.getElementById("to");

totalAmount.innerText = total;

const discount = document.getElementById("discount");


}