class UI {
    constructor() {
        this.profilecontainer = document.querySelector("#profilecontainer");
        this.alert = document.querySelector("#alert");

    }
    showprofile(profile) {
        this.profilecontainer.innerHTML = `
<div class="card card-body my-5">
<div class="row">
<div class="col-md-3">
<a><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
</div>
<div class="col-md-9 ">
<h4 class="text-center">Contact</h4>
<ul class="list-group">
<li class="list-group-item">Name:${profile.name}</li>
<li class="list-group-item">Username:${profile.username}</li>
<li class="list-group-item">
Address:
${profile.address.street}
${profile.address.city}
${profile.address.zipcode}
${profile.address.suite}
</li>
<li class="list-group-item">Phone:${profile.phone}</li>
<li class="list-group-item">Website:${profile.website}</li>
<li class="list-group-item">Company-name:${profile.company.name}</li>
</ul>
<h4 class="text-center">Todos</h4>
<ul class="list-group" id="todos">


</ul>
</div>
</div>
</div>
`
    }
    showalert(text) {
        this.alert.innerHTML = ` ${text} is not defiend `
    }
    clear() {
        this.alert.innerHTML = '';
        this.profilecontainer.innerHTML = '';
    }

    showtodos(todo) {
        let html = '';

        todo.forEach(element => {
            if (element.completed) {
                html += ` <li class="list-group-item bg-info">${element.title}</li>`
            } else {
                html += ` <li class="list-group-item bg-secondary">${element.title}</li>`
            }


        });
        this.profilecontainer.querySelector("#todos").innerHTML = html;
        // console.log(html);

    }

}