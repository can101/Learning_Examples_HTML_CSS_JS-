function Employee(name, salary) {
    if (!this instanceof Employee) {
        return new Employee(name, salary);
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.caculate = function() {
    var month = (new Date().getMonth()) + 1;
    console.log(month);
}

var em1 = Employee('yigit', 3000);
console.log();
em1.caculate();

var em2 = new Employee('can', 4000);
console.log(em2);