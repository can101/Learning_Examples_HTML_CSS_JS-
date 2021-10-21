// function Employee(name, salary) {
//     if (!this instanceof Employee) {
//         return new Employee(name, salary);
//     }
//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype.caculate = function() {
//     var month = (new Date().getMonth()) + 1;
//     var tax = 0,
//         total = 0;
//     total = this.salary * month;
//     if (total <= 20000) {
//         tax = total * 0.2;
//     } else if (total > 20000 && total < 30000) {
//         tax = total * 0.25;
//     } else {
//         tax = total * 0.3;

//     }
//     return {
//         tax: tax,
//         paid: total - tax
//     }

// }


// var em1 = new Employee('yigit', 3000);
// console.log(em1.caculate());

// var em2 = new Employee('can', 4000);
// console.log(em2.caculate());

// let personproto = {
//     caculate: function() {
//         let year = new Date();
//         return year.getFullYear() - this.yearOfBirth;
//     }
// }

// let can = Object.create(personproto);

// can.name = 'can';
// can.yearOfBirth = 2000;
// can.job = 'student';


// console.log(personproto);
// console.log(can);
// console.log(can.caculate());
// let emel = Object.create(personproto, {
//     name: { value: 'emel' },
//     yearOfBirth: { value: 2001 },
//     job: { value: 'student' }
// });
// console.log(emel);

let person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
person.prototype.caluatAge = function() {
    let year = new Date();
    return year.getFullYear() - this.yearOfBirth;
}


let Teacher = function(name, yearOfBirth, job, subject) {
    person.call(this, name, yearOfBirth, job),
        this.subject = subject;
}
Teacher.prototype = Object.create(person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function() {
    return 'hello , my name is  ' + this.name;
}
let emel = new Teacher('emel', 1989, 'teacher', 'math')
console.log(emel);