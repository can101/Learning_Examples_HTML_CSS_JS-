// const filter = document.getElementById("filter");
// document.addEventListener("DOMContentLoaded", load);

// function load(e) {
//     console.log("Page was load.");
// }

// focus
// filter.addEventListener("focus", run);
//blur
// filter.addEventListener("blur", run);

// //paste
// filter.addEventListener("paste", run);
// //copy
// filter.addEventListener("copy", run);
// //cut
// filter.addEventListener("cut", run);
// //select
// filter.addEventListener("select", run);




// function run(e) {
//     console.log(e.type);
// }

// event bubling

// document.querySelector(".container").addEventListener("click", function() {
//     console.log("div container");
// });

// document.querySelector(".card-row").addEventListener("click", function() {
//     console.log("card row");
// });

// document.getElementsByClassName("card-body")[1].addEventListener("click", function() {
//     console.log("card body");
// });

// event captirung veya delegeation

// const cardbody = document.querySelectorAll(".card-body")[1];
// cardbody.addEventListener("click", run);

// function run(e) {
//     if (e.target.className == "fas fa-times") { console.log("remove opreation"); }

//     if (e.target.id == "filter") { console.log("filter opreation"); }

//     if (e.target.id == "clear-todos") { console.log("refresh opreation btn"); }



//     // console.log(e.target);
// }

// seion stroage -key & value

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));





    e.preventDefault();
}