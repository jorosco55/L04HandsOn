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

class Manager extends Employee {
    constructor(name, jobDescription, yearsExperience, degreeCompleted, hireDate, salary) {
        super(name, hireDate,salary);

        this.name = name;
        this.hireDate = hireDate;
        this.jobDescription = jobDescription;
        this.yearsExperience = yearsExperience;
        this.degreeCompleted = degreeCompleted;
    }

    managerInfo() {
        console.log(this.name + " is the the new " + this.jobDescription + ", she has " + this.yearsExperience + " years of experience and graduated with a " + this.degreeCompleted + " degree." +
         " Her hire date will be " + this.hireDate)
    }
}

class Designer extends Employee {
    constructor(name, jobDescription, yearsExperience, degreeCompleted, salary, hireDate) {
        super(name, salary, hireDate);

        this.name = name;
        this.jobDescription = jobDescription;
        this.yearsExperience = yearsExperience;
        this.degreeCompleted = degreeCompleted;
    }

    designerInfo() {
        console.log(this.name + " is the the new " + this.jobDescription + ", she has " + this.yearsExperience + " years of experience and graduated with a " + this.degreeCompleted + " degree." +
            " Her hire date will be " + John._hireDate)
    }
}

class SalesAssociate extends Employee {
    constructor(name, jobDescription, yearsExperience, degreeCompleted, hireDate, salary) {
        super(name, salary, hireDate);

        this.name = name;
        this.hireDate = hireDate;
        this.jobDescription = jobDescription;
        this.yearsExperience = yearsExperience;
        this.degreeCompleted = degreeCompleted;
    }

    salesAssociateInfo() {
        console.log(this.name + " is the the new " + this.jobDescription + ", she has " + this.yearsExperience + " years of experience and graduated with a " + this.degreeCompleted + " degree." +
            " Her hire date will be " + this.hireDate)
    }
}




let John = new Employee("John", "$80k", "05-25-2018");
John.greeting();

let Kirstie = new Manager("Kirstie","Manager", "15", "Business", "05-31-2018");
Kirstie.managerInfo();

let Sara = new Designer("Sara","Designer", "12", "Graphic Arts");
Sara.designerInfo();

let Erica = new SalesAssociate("Erica", "Sales Associate", "18", "Marketing", "05-30-2018");
Erica.salesAssociateInfo();




