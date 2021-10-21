// course class
class Course {
    constructor(title, instructor, image) {
        this.id = Math.round(Math.random() * 1000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}
// ui class
class UI {
    addtolistcourse(course) {
        const list = document.querySelector('.course-list');

        let html = `
     <tr> 
    <td><img src="${course.image}" height="100px" alt=""></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
     <td><a class="btn btn-small btn-danger deletebutton" data-id="${course.id}"  id="deletebutton">Delete</a></td>
     
     </tr>
    `
        list.innerHTML += html;

        // console.log(`title=${course.title},instructor=${course.instructor} , img=${course.image}`)

    }
    clearlistcontrol() {
        const title = document.getElementById("course_title").value = "";
        const intro = document.getElementById("instructor").value = "";
        const img = document.getElementById("formFile").value = "";

    }
    deleteCourse(a) {
        if (a.classList.contains('deletebutton')) {
            a.parentElement.parentElement.remove();
            return true;
        }

    }
    showinfomessage(text, alert) {
        const hr = document.querySelector('hr');
        var infomessage = ` <div class="alert alert-${alert}">${text}</div>`;

        hr.insertAdjacentHTML('afterend', infomessage);

        setTimeout(() => {
            document.querySelector('hr').nextElementSibling.remove();
        }, 2000);
    }
}
class Stroage {
    static getcourses() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'))
        }

        return courses;

    }
    static displaycourses() {
        const courses = Stroage.getcourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addtolistcourse(course);

        });

    }
    static addcourse(course) {
        const courses = Stroage.getcourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));


    }
    static deletecourse(element) {
        if (element.classList.contanis = 'deletebutton') {
            const id = element.getAttribute("data-id");
            const courses = Stroage.getcourses();
            courses.forEach((course, index) => {
                if (course.id == id) {
                    courses.splice(index, 1);
                }
            });
            localStorage.setItem("courses", JSON.stringify(courses));
        }
    }
}

document.addEventListener('DOMContentLoaded', Stroage.displaycourses);
document.getElementById("courseSaveBtn").addEventListener("click", e => {

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
        // save to LS
        Stroage.addcourse(course);
        //clear control
        ui.clearlistcontrol();
        ui.showinfomessage('The course has been added.', 'success');
    }
    e.preventDefault();
});

document.querySelector('.course-list').addEventListener("click", (e) => {
    const ui = new UI();
    // course dleted
    if (ui.deleteCourse(e.target) == true) {
        // delete form LS
        Stroage.deletecourse(e.target);
        ui.showinfomessage('the course has been deleted.', 'danger');

    }
});