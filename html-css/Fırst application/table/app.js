// <button type="button" class="btn btn-primary">Primary</button>


// const locations = document.querySelector("body");

// const createelemnt = document.createElement("a");

// createelemnt.type = "button";
// createelemnt.className = "btn btn-danger";
// locations.appendChild(document.createTextNode("Click me"));
// createelemnt.appendChild(locations);


// console.log(createelemnt);

const crd = document.querySelector(".card-body");
const crt = document.createElement("a");

crt.className = "btn btn-danger";
crt.id = "btn";
crt.target = "_blank";
crt.href = "https://getbootstrap.com/docs/4.5";

crt.appendChild(document.createTextNode("Boostrap 4"));
crd.appendChild(crt);