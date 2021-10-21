// // 'this' keyword

// // let list = {
// //     category: 'phone',
// //     names: ['Iphone 8', 'Samsung S8', 'Iphone 7'],
// //     call: function() {
// //         var self = this;
// //         this.names.map(function(name) {
// //             console.log(`${self.category}  ${name}`);
// //         });
// //     }
// // }
// // list.call();

// // ES6


// // let list = {
// //     category: 'phone',
// //     names: ['Iphone 8', 'Samsung S8', 'Iphone 7'],
// //     call: function() {
// //         this.names.map((name) => {
// //             console.log(`${this.category} :  ${name}`);
// //         });
// //     }
// // }

// // list.call();


// // function Game() {
// //     this.live = 0;
// //     this.addlive = function() {
// //         var self = this;
// //         this.OnUp = setInterval(function() {
// //             console.log(++self.live);
// //         }, 1000)
// //     }
// // }

// // function Game() {
// //     this.live = 0;
// //     this.addlive = () => {
// //         var self = this;
// //         this.OnUp = setInterval(() => {
// //             console.log(++self.live);
// //         }, 1000)
// //     }
// // }

// // let player = new Game();
// // player.addlive();

// // function getTotal(a, b, c) {
// //     return a + b + c;
// // }
// // console.log(getTotal(10, 20, 30));

// // let numbers = [10, 20, 900];
// // // es5 
// // console.log(getTotal.apply(null, numbers));

// // // es6
// // console.log(getTotal(...numbers));

// // let arr1 = ['ayse', "mehmet", "ebru"];
// // let arr2 = ["emre", "derya", "seyma"];

// // arr1.push(...arr2);
// // arr1.unshift(...arr2);
// // console.log(arr1);


// let h1 = document.querySelector('h1');
// let li = document.querySelectorAll('li');

// let tags = [h1, ...li];
// console.log(tags);

// tags.forEach(x => x.style.color = 'white');
// $("ul").css("background", "magenta");
// $('li:nth-child(odd)').css("background", "red");
// $('li:nth-child(even)').css({ "background": "black" }, { "color": "#fff" });


// function sumES5() {
//     let arr = Array.prototype.slice.call(arguments);
//     let result = 0;

//     arr.forEach(function(item) {
//         result += item;
//     });
//     return result;
// }

// console.log(sumES5(10, 20, 50));



// function sumES6(...arr) {
//     let result = 0;

//     arr.forEach(item => result += item);
//     return result;
// }
// console.log(sumES6(10, 20, 30));


// function isDriver(age, ...years) {
//     years.forEach(year => {
//         var date = new Date();
//         let years = date.getFullYear();
//         // console.log(years);
//         if (years - year >= age) {
//             console.log('Ehliyet alabilirsiniz.');
//         } else {
//             console.log(`Ehliyet almaniza daha ${years - year} yil var.`);
//         }
//     });
// }
// isDriver(50, 2000, 2013, 1990, 2011);


// function printS(...x) {
//     x.map.call(() => { return x * 2 })
// }
// console.log(printS('c', 'e'));