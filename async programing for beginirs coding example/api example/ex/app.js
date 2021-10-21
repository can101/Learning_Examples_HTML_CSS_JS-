const profile = new Profile();
const ui = new UI();


const searchprofile = document.querySelector("#searchprofile");

searchprofile.addEventListener("keyup", (event) => {

    let text = event.target.value;
    ui.clear();
    if (text !== "") {
        profile.getProfile(text).then(a => {
            console.log(a);
            if (a.x.length === 0) {
                ui.showalert(text);
            } else {
                ui.showprofile(a.x[0]);
                ui.showtodos(a.todo);
            }
        }).catch(error => {
            ui.showalert(text);

        });
    }

});