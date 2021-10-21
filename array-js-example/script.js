// demo array
var demo = [];
//console.log(demo);
demo = ["BMW", "Mercedes", "Opel", "Mazda"];

console.log(`demo = ${demo.length}`);
console.log(`first array units = ${demo[0]} last array units = ${demo[3]} `);
demo.push("Renault");
console.log(demo);
demo.unshift("Toyota");
console.log(demo);
demo.pop();
console.log(demo);
demo.shift();
console.log(demo);
demo.reverse();
console.log(demo);
demo = ["BMW", "Mercedes", "Opel", "Mazda"];
console.log(demo);
console.log(demo.indexOf('Opel'));
console.log(demo.includes('x'));
var str = "Chevrolet,Dacla";
var arr = str.split(',');
console.log(arr);
console.log(arr.concat(str));
console.log(demo.splice(0, 2));