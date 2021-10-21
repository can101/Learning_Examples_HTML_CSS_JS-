document.querySelector("#getone").addEventListener("click", getone);
document.querySelector("#getall").addEventListener("click", getall);
document.querySelector("#postdata").addEventListener("click", postdata);

function getone() {

    const inputvalue = document.querySelector("#inputvalue").value;
    document.querySelector("#inputvalue").value = "";
    var url = "https://jsonplaceholder.typicode.com/posts/" + inputvalue;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {

        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            let html = `
              <div class="card text-center mb-4">
                   <div class="card-header  ">
                       <h5 class="card-title text-warning fw-bolder" >${posts.title}</h5>
                   </div>
                   <div class="card-body">
                             <p class="card-text text-muted">${posts.body}</p>
                   </div>
                        <div class="card-footer text-secondary ">
                       ${posts.id}
                   </div>
               </div>
              `

            document.querySelector("#show").innerHTML = html;

        }

    }
    xhr.send();


}

function getall() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {

        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            let html = '';
            posts.forEach(post => {
                html += `
              <div class="card text-center mb-4">
                   <div class="card-header  ">
                       <h5 class="card-title text-warning fw-bolder" >${post.title}</h5>
                   </div>
                   <div class="card-body">
                             <p class="card-text text-muted">${post.body}</p>
                   </div>
                        <div class="card-footer text-secondary ">
                       ${post.id}
                   </div>
               </div>
              `
            });
            document.querySelector("#show").innerHTML = html;

        }

    }
    xhr.send();

}

function postdata() {
    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
    }
    var json = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function() {

        if (xhr.status === 201 && xhr.readyState === 4) {
            var post = xhr.responseText;
            console.log(post);
        }


    }
    xhr.send(json);
}