const input = document.querySelector('#form');
const btnAdd = document.querySelector('#button-add');
const btnDelteAll = document.querySelector('#btn-deleteall');
const tasklist = document.querySelector('ul');
let items;
btnAdd.addEventListener('click', createItem);
document.querySelector(".delete-item").addEventListener('click', DeleteAllItem);

document.querySelector("form").addEventListener('submit', createItem);


function GetItemFromLS() {

}

function SetItemToLS() {

}

function DeleteItemLS() {

}

function createItem(e) {
    if (input.value === null && input.value === ' ') {
        input.value === ' '
        alert("Add a new item");
    } else {
        // crt li  element
        const crtLi = document.createElement('li');
        crtLi.className = "list-group-item list-group-item-secondary";
        crtLi.appendChild(document.createTextNode(input.value));
        // crt a elemnet
        const crta = document.createElement('a');
        crta.className = "delete-item float-end";
        crta.setAttribute('href', "#");
        crta.innerHTML = '<i class="fas fa-times text-light "></i>';
        // a appendchild li
        crtLi.appendChild(crta);
        // ul appendchild li
        tasklist.appendChild(crtLi);
        // input change value
        input.value = '';
    }


    e.preventDefault();

}

function AddNewItem() {

}

function AddItem() {

}
deleteitem.addEventListener("click", DeleteAllItem);

function DeleteAllItem(e) {
    let deleteitem = document.querySelectorAll('.fas fa-times');
    deleteitem.forEach(function(item) {
        item.parentElement.parentElement.remove();
    });
    console.log(item);
    e.preventDefault();

}

function DeleteItem() {

}