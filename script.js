/*
Requirements
Use your new knowledge of the JavaScript programming language to create three subclasses of the Employee
parent class given. Each class should inherit from Employee as well as contain two methods specific to
each subclass.

Three new subclasses:

Manager
Designer
SalesAssociate
Examples of the methods for these subclasses:

jobDescription()
yearsExperience()
degreeCompleted()

 */




class Employee {
    constructor(name, salary, hireDate) {
        this._name = name;
        this._salary = salary;
        this._hireDate = hireDate;

    }
    greeting() {
        console.log("Hello, my name is " + this._name + "." + " I have been hired at " + this._salary + " a year on " + this._hireDate);
    }
    get Name() {
        console.log(this._name.toUpperCase());
    }
    get Salary() {
        console.log(this._salary);
    }
    get HireDate() {
        console.log(this._hireDate);
    }


}

class newManager extends Employee {
    constructor(jobDescription, yearsExperience, degreeCompleted,name, salary, hireDate) {
        super(name, salary, hireDate);

        this.jobDescription = jobDescription;
        this.yearsExperience = yearsExperience;
        this.degreeCompleted = degreeCompleted;
    }

    managerInfo() {
        console.log(John._name + " is the the new " + this.jobDescription + ", she has " + this.yearsExperience + " years of experience and graduated with a " + this.degreeCompleted + " degree." +
         "her hire date will be " + John._hireDate)
    }
}

class newDesigner extends Employee {
    constructor(jobDescription, yearsExperience, degreeCompleted,name, salary, hireDate) {
        super(name, salary, hireDate);


        this.jobDescription = jobDescription;
        this.yearsExperience = yearsExperience;
        this.degreeCompleted = degreeCompleted;
    }

    designerInfo() {
        console.log(John._name + " is the the new " + this.jobDescription + ", she has " + this.yearsExperience + " years of experience and graduated with a " + this.degreeCompleted + " degree." +
            "her hire date will be " + John._hireDate)
    }
}




let John = new Employee("Kirstie", "$80k", "05-25-2018");
John.greeting();

let Kirstie = new newManager("Manager", "15", "Business");
Kirstie.managerInfo();

let Sara = new newDesigner("Designer", "12", "Graphic Arts")
Sara.designerInfo();




