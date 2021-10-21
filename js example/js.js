// let trafficE = new Date("04/20/2017");
// trafficE.setHours(0, 0, 0, 0);
// let trafficms = Date.now() - trafficE.getTime();
// let trafficday = Math.round(trafficms / (1000 * 60 * 60 * 24));
// console.log(trafficday);

// if (trafficday <= 365) {
//     console.log("1.Bakim yilli geldi");
// } else if (trafficday > 365 && trafficday <= 365 * 2) {
//     console.log("2.Bakim yilli geldi");

// } else if (trafficday > 365 * 2 && trafficday <= 365 * 3) {
//     console.log("3.Bakim yilli geldi");

// } else if (trafficday > 365 * 3 && trafficday <= 365 * 4) {
//     console.log("4.Bakim yilli geldi");

// } else {
//     console.log("I don't know time");
// }

let result = prompt("who's there ? 'Cancel,Other,Admin'");
// result = result[0].toUpperCase() + result.slice(1);
console.log(result);

if (result == "Cancel") {
    console.log("Canceled");

} else if (result == "Other") {
    console.log("I don't know you");

} else if (result == "Admin") {
    let res = prompt("Password ? `Cancel,Other,TheMaster`");
    console.log(res);

    switch (res) {
        case "Cancel":
            console.log("Canceled");
            break;
        case "Other":
            console.log("Wrong password");
            break;
        case "TheMaster":
            console.log("Welcome!");
            break;
        default:
            console.log("I don't know!");


    }


} else {
    console.log("I don't know!");

}