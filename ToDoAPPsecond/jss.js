const input = document.querySelector('#form');
const btnAdd = document.querySelector('#button-add');
const btnDelteAll = document.querySelector('#btn-deleteall');
const tasklist = document.querySelector('ul');
let items;

items = getItemsFromLS();
// items load
loadItems();

btnAdd.addEventListener("click", setItemToLS);
document.querySelector('form').addEventListener("submit", setItemToLS);
document.querySelector('form').addEventListener("submit", CrrateTaskList);
btnAdd.addEventListener("click", CrrateTaskList);
// delete an item
// taskList.addEventListener('click', deleteItem);

// let y = tasklist.querySelectorAll('.delete-item');

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1);
            console.log(items.splice(index, 1));
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}
// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            // delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

function loadItems() {
    items = getItemsFromLS();

    items.forEach(function(item) {
        CrrateTaskList(item);
    });
}

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemToLS(e) {
    // 
    items = getItemsFromLS();
    items.push(input.value);
    // console.log(items)
    localStorage.setItem('items', JSON.stringify(items));

    // input clear
    input.value = "";

    e.preventDefault();
}





function CrrateTaskList(text) {
    // crt li
    const crtLi = document.createElement('li');
    crtLi.className = "list-group-item list-group-item-secondary";
    crtLi.appendChild(document.createTextNode(text));

    // crt a
    const crta = document.createElement('a');
    crta.className = "delete-item float-end";
    crta.setAttribute('href', "#");
    crta.innerHTML = '<i class="fas fa-times  "></i>';

    // a appendchild li
    crtLi.appendChild(crta);

    // ul appendchild li
    tasklist.appendChild(crtLi);

}

// deleteallitems
btnDelteAll.addEventListener("click", DeleteAllItem);

function DeleteAllItem(e) {
    if (confirm("are you sure ?( CLRD )")) {

        localStorage.clear();
        items = [];
        e.preventDefault();
        // list-group-item
        let x = document.querySelectorAll('.list-group-item');
        console.log(x);
        x.forEach(function(e) {
            e.remove();
        });
    } else {
        alert('Not claerad!!');
    }
    items = getItemsFromLS();

    e.preventDefault();

}