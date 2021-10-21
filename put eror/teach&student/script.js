// person   constructor  ///////////////////////////////////////

function person(name) {
    this.name = name;
}

person.prototype.Introduce = function() {
    console.log('hello my name is ' + this.name);
}

// teacher   constructor ///////////////////////////////////////

function Teacher(name, branch) {
    person.call(this, name);
    this.branch = branch;
}
Teacher.prototype = Object.create(person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function() {

    console.log('I  teach ' + this.branch);
}


// student   constructor ////////////////////////////////////

function student(name, number) {
    person.call(this, name);
    this.number = number;
}
student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;


student.prototype.study = function() {
    console.log('my student number is ' + this.number + ' I have already studied hard. ');

}

// Headmaster   constructor ////////////////////////////////////

function Headmaster(name, branch) {
    Teacher.call(this, name, branch);
}
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function() {
    console.log('shared all the work');
}

let p1 = new person('can');
p1.Introduce();
console.log(p1);

let t1 = new Teacher('esmel', 'phisics');
console.log(t1);
t1.Introduce()
t1.teach();


let s1 = new student('cenk', 111);
console.log(s1);
s1.Introduce();
s1.study();

let t2 = new Headmaster('emel', 'math');
console.log(t2);
t2.Introduce();
t2.teach();
t2.shareTask();