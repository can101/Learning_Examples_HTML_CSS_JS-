// // text 
// function getText() {
//     fetch('text.txt').then(response => {
//         return response.text();
//     }).then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.log(error);
//     })
// }

// // getText()

// // json

// function getjson() {
//     fetch("products.json")
//         .then(response => {
//             return response.json();
//         }).then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.log(error);
//         })
// }
// // getjson();

// // external api

// function externalapi() {
//     fetch("https://randomuser.me/api/?results=5")
//         .then(data => {
//             return data.json();
//         })
//         .then(users => {
//             let html = "";
//             users.results.forEach(user => {

//                 html += `
//          <div class="card my-5" style="width: 18rem;">
//   <img src="${user.picture.large}" class="card-img-top" alt="${user.login.username}">
//   <div class="card-body">
//     <h5 class="card-title">${user.login.username}</h5>
//     <p class="card-text">${user.email}  ${user.location.city}</p>
//   </div>
// </div>
//                 `
//                 document.querySelector("#showpost").innerHTML = html;

//             });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

// externalapi();

// function postextrnalapi() {
//     const url = "https://jsonplaceholder.typicode.com/todos/"
//     var data = {
//         method: "POST",
//         body: JSON.stringify({
//             userId: 1,
//             title: "sample title",
//             body: "sample body"

//         }),
//         headers: new Headers({ "content-type": "application/json" })
//     }

//     fetch(url, data)
//         .then(res => {
//             console.log(res);
//         })
// }
// postextrnalapi();

// async function fn() {
//     return "hello";
// }

// fn().then(res => console.log(res));
var iserror = true;

function getCategeroy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!iserror) {
                resolve("phone");

            } else {
                reject('error');
            }


        }, 1000);
    });

}

function getProducts(categeroy) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`5 products in ${categeroy}`);
        }, 1000);
    });
}

getCategeroy()
    .then(getProducts)
    .then(res => console.log(res))
    .catch(err => console.log(err));


async function getProduct() {
    try {
        let categeroy = await getCategeroy();
        let result = await getProducts(categeroy);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getProduct();