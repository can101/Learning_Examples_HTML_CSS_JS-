// arrow functions

// ES5

let welcomeES5 = function() {
    console.log('Hello from ES5');
}

welcomeES5();


// ES6
let welcomeES6 = () => {
    console.log('Hello from ES6');
}
welcomeES6();


// width parameters
// es5

let multiplyES5 = function(x, y) {
    return x * y;
}

console.log(multiplyES5(4, 5));

let getproductsES6 = (id, name) => ({
    id: id,
    name: name
});

console.log(getproductsES6("12", "Iphone"));


const phones = [
    { name: "Iphone 8", price: 3000 },
    { name: "Iphone 6", price: 2000 },
    { name: "Iphone 5", price: 1000 },
    { name: "Iphone 7", price: 2500 },

];

let pricesES5 = phones.map(function(phone) {
    return phone.name;
});

console.log(pricesES5);

let pricesES6 = phones.map(phone => phone.name);

console.log(pricesES6);


const arr = [1, 223, 44, 6, 23, 12, 4, 62, 31, 45, 60];

let evenES5 = arr.filter(function(a) {
    return a % 2 == 1;
});
console.log(evenES5);

let evenES6 = arr.filter(x => x % 2 == 0);
console.log(evenES6);