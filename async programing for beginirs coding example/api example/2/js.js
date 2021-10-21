var products = [
    { id: 1, name: "samsung s8", price: 3000 },
    { id: 2, name: "samsung s7", price: 2000 },
    { id: 2, name: "samsung s6", price: 1000 }

]



function addproduct(prd, callback) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if (added) {
                resolve();
            } else {
                reject("hata : 400");
            }



        }, 2000)
    });


    // if (added) {
    //     setTimeout(() => {
    //         products.push(prd);
    //         callback(null, prd);
    //     }, 2000);
    // } else {
    //     callback("500", prd);

    // }
}

function getproducts() {
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name)
        });
    });
}

// addproduct({ id: 1, name: "samsung s9", price: 5000 },
//     function(err, data) {
//         if (err) {
//             console.log("hata :" + err);
//         } else {
//             console.log(data);
//         }

//     });
// getproducts();
addproduct({ id: 1, name: "samsung s9", price: 5000 })
    .then(getproducts)
    .catch(err => {
        console.log(err);
    });