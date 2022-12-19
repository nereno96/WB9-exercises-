class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName)

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getGrossPay(hoursWorked) {
        return hoursWorked * this.payRate;
    }
}

employee1 = new Employee("Glorilla", "James", "1", "Engineer I", 32.75);
employee2 = new Employee("Carmelo", "Adams", "2", "Data Analyst", 43.20);

console.log(`${employee1.getFullName()} has a gross pay of $${employee1.getGrossPay(40).toFixed(2)} after working 40 hours.`);
console.log(`${employee2.getFullName()} has a gross pay of $${employee2.getGrossPay(36).toFixed(2)} after working 36 hours.`);