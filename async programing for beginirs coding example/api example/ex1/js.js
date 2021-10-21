/*var p = new Promise((resolve, reject) => {
    if (false) {
        resolve("success");
    } else {
        reject("failrule");
    }
});

p.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
});

new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    })
    .then(number => {
        console.log(number);
        return number * number;
    }).then(number => {
        console.log(number);
        return number * number;
    }).then(number => {
        console.log(number);
    });
    */

const ismomhappy = false;

const willnewphone = new Promise((resolve, reject) => {
    if (ismomhappy) {
        const phone = {
            name: "Iphone x",
            price: 4000,
            color: "sliver"
        }
        resolve(phone);
    } else {
        const error = new Error("mom is not happy");
        reject(error);
    }
});

const showmessage = (phone) => {
    const message = `he friends this is my new phone ${phone.name}`;

    return Promise.resolve(message);
}


const askmom = () => {
    willnewphone.then(showmessage).then(m => console.log(m))
        .catch(error => {
            console.log(error);
        })
}
askmom();