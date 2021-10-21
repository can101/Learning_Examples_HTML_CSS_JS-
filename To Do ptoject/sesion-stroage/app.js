// // sesion stroage -key & value

// //butonlari secmek

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// //inputs

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItem);

// function addItem(e) {
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }

// function deleteItem(e) {
//     sessionStorage.removeItem(deletekey.value);
// }

// function clearItem(e) {
//     sessionStorage.clear();

// }


//localStorage

// localStorage.setItem("hareket", "can");
// localStorage.setItem("tekrar", 50);

// const value = Number(localStorage.getItem("tekrar"));
// console.log(value);
// console.log(typeof value);

//clear localstroage
// localStorage.setItem("hareket", "can");
// localStorage.setItem("tekrar", 50);
// localStorage.clear();
//console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("tekrar") == null) {
//     console.log("sorguladiginiz veri bulunmuyor")
// } else {
//     console.log("veri bulunuyor");
// }

//local stroage - array yazma
// const todos = ["todo 1", "todo 2", "todo 3"];
// localStorage.setItem("todos", todos);
// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);