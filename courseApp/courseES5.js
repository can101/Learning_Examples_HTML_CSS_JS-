// course constuctor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}



function UI() {

}
UI.prototype.addtolistcourse = function(course) {
    const list = document.querySelector('.course-list');

    let html = `
     <tr> 
    <td><img src="${course.image}" height="100px" alt=""></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
     <td><a class=" btn btn-small btn-danger deletebutton " id="deletebutton">Delete</a></td>
     
     </tr>
    `
    list.innerHTML += html;

    console.log(`title=${course.title},instructor=${course.instructor} , img=${course.image}`)

}
UI.prototype.clearlistcontrol = function() {
    const title = document.getElementById("course_title").value = "";
    const intro = document.getElementById("instructor").value = "";
    const img = document.getElementById("formFile").value = "";

}
UI.prototype.deleteCourse = function(a) {
    if (a.classList.contanis = 'deletebutton') {
        a.parentElement.parentElement.remove();
    }
}


UI.prototype.showinfomessage = function(text, alert) {
    const hr = document.querySelector('hr');
    var infomessage = ` <div class="alert alert-${alert}">${text}</div>`;

    hr.insertAdjacentHTML('afterend', infomessage);

    setTimeout(() => {
        document.querySelector('hr').nextElementSibling.remove();
    }, 2000);
}


document.getElementById("courseSaveBtn").addEventListener("click", function(e) {

    const title = document.getElementById("course_title").value;
    const intro = document.getElementById("instructor").value;
    const img = document.getElementById("formFile").value;

    // crate curso object
    const course = new Course(title, intro, img);

    // create ui object
    const ui = new UI();
    if (title === '' || intro === '' || img === '') {
        // show warning alert
        ui.showinfomessage('Please complate the form.', 'warning');
    } else {
        // addtolistcourse ui add
        ui.addtolistcourse(course);

        //clear control
        ui.clearlistcontrol();
        ui.showinfomessage('The course has been added.', 'success');
    }
    e.preventDefault();
});

document.querySelector('.course-list').addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showinfomessage('the course has been deleted.', 'danger');
});