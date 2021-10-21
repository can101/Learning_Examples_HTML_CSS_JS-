// // let val;

// // const numbers = new Map();


// // numbers.set(1, "one");
// // numbers.set(2, "two");
// // numbers.set("3", "three");
// // numbers.set("four", "four");


// // val = numbers;
// // val = numbers.get(2);
// // val = numbers.get('3');
// // val = numbers.get('four');

// // val = numbers.size;
// // val = numbers.delete('four');
// // val = numbers.has('four');
// // // val = numbers.clear();
// // val = numbers;


// // for (let [key, value] of numbers) {
// //     console.log(`${key} = ${value}`);
// // }
// // for (let key of numbers.keys()) {
// //     console.log(`${key}`);
// // }
// // for (let value of numbers.values()) {
// //     console.log(`${value}`);
// // }
// // for (let [key, value] of numbers.entries()) {
// //     console.log(`${key} = ${value}`);
// // }

// // let first = new Map([
// //     [1, "one"],
// //     [2, "two"],
// //     [3, "three"]
// // ]);
// // let second = new Map([
// //     [4, "four"],
// //     [5, "five"],
// // ]);
// // val = new Map([...first, ...second]);

// // console.log(val);


// let val;

// var myset = new Set();

// myset.add("can");
// myset.add(1);
// myset.add("iki");
// myset.add(2);
// myset.delete("iki")
// myset.add({ a: 1, b: 2 });
// // for (let [key, value] of myset.entries()) { console.log(key, value); }








// val = myset;
// // console.log(val);
// // console.log(myset.size);
// console.log(Array.from(myset));

// let myset2 = new Set([1, 2, 3, 4]);

// console.log(Array.from(myset).filter(x => myset2.has(x)));
// console.log([...myset]);

// class personES6 {
//     constructor(name, job, yearofbirth) {
//         this.name = name;
//         this.job = job;
//         this.yearofbirth = yearofbirth;
//     }
//     cacualtetoage() {
//         const date = new Date();
//         return date.getFullYear() - this.yearofbirth.value;
//     }
//     static sayHi() {
//         console.log("hello there")
//     }
// }

// let can = new personES6({ value: "can" }, { value: "student" }, { value: 1999 })
// console.log(can);
// console.log(can.cacualtetoage());
// personES6.sayHi();



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    static distianc(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}
const d1 = new Point(10, 10);
const d2 = new Point(20, 20);

console.log(Point.distianc(d1, d2));