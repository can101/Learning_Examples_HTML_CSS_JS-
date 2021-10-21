let myobj = {
    // method: "POST",
    url: "https://randomuser.me/api/?results=10"
}
let request = obj => {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open(myobj.method || "GET", obj.url);
        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });

        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => {
            reject(xhr.statusText);

        }
        xhr.send(obj.body);
    });
}

let builthtml = data => {
    let users = JSON.parse(data)

    let html = "";

    users.results.forEach(user => {
        // console.log(user);
        html += `
          <div style="margin:20px;">
            <img src="${user.picture.large}" alt="${user.name.first+" "+user.name.last}">
            <p>${user.name.title}</p>
            <p>${user.email}</p>
            <p>${user.location.country+"/"+user.location.city}</p>

        </div>
                     `
            // showusersbord
    });
    document.querySelector("#showusersbord").innerHTML = html;
    return Promise.resolve("Html is loaded");
}


request(myobj)
    .then(builthtml)
    .then(x => {
        console.log(x);
    })
    .catch(error => {
        console.log(error);
    })