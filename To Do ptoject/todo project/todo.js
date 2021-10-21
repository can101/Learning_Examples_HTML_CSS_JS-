// tum elemtleri secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearbutton = document.querySelector("#lear-todos");



eventlisteners();

function eventlisteners() { //tum event listenerlar

    form.addEventListener("submit", addTodo);


}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "lutfen bir todo girin..");
    } else {
        addTodoUI(newTodo);
        showAlert("success", "basarili bir sekilde eklendi");




        e.preventDefault();

    }

    function getTodosFromStorage() {
        let todos;
        if (localStorage.getItem("todos") == null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
    }

    function addTodotostroage(newTodo) {
        let todos = getTodosFromStorage();
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function showAlert(type, message) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        firstcardbody.appendChild(alert);
        // alert.remove();
        //    set time out
        setTimeout(function() { alert.remove(); }, 1000)

    }

    function addTodoUI(newTodo) { // string degerini list etim olarak ui a ekleyecek.



        //   <!-- <li class="list-group-item d-flex justify-content-between">
        //   Todo 1
        //   <a href="#" class="delete-item">
        //       <i class="fas fa-times"></i>
        //   </a>

        // </li> -->

        //list item olusturma
        const listItem = document.createElement("li");
        //link olusturma
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item";
        link.innerHTML = '<i class="fas fa-times"></i>';

        listItem.className = "list-group-item d-flex justify-content-between";
        //text node ekleme
        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);
        // todo liste list itemi ekleme
        todolist.appendChild(listItem);
        todoInput.value = "";


    }