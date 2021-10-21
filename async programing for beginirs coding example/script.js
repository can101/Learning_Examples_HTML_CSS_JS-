// const first = () => {
//     console.log("first");
//     second();
// }
// const second = () => {
//     setTimeout(() => {
//         console.log("second");
//     }, 3000);


//     third();
// }
// const third = () => {
//     console.log("third");
// }
// first();

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     } else if (xhr.status === 404) {
//         console.log("Nfiled");
//     }
// }

// xhr.onprogress = () => {
//     console.log("progresing");
// }
// xhr.open("GET", 'a.txt', true);
// xhr.send();

document.querySelector("#getemployee").addEventListener('click', loademploye);


function loademploye() {
    var loadsc = document.querySelector("#loading");
    loadsc.style.display = "block";


    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employee.json', true);

    anime({
        targets: '.line-drawing-demo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 750,
        // delay: function(el, i) { return i * 350 },
        direction: 'alternate',
        loop: true
    });
    setTimeout(() => {
        xhr.onload = function() {
            if (this.status === 200) {
                loadsc.style.display = "none";
                let employee = JSON.parse(this.responseText);
                let html = "";
                employee.forEach(employee => {
                    html += `<tr>
                    <td>${employee.firstname}</td>
                    <td>${employee.lastname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                  </tr>
`
                });

                document.querySelector("#employees").innerHTML = html;
            }

        }
        xhr.send();
    }, 3000);





}