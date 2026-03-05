class Student{
    static studentCount:number=0;

    constructor(public name:string, public age:number)
    {
        this.name=name;
        this.age=age;
        Student.studentCount++;
    }

    display(){
        console.log(`Name: ${this.name}, Age:${this.age}`);
    }
}

let student1= new Student('John',20);
let student2= new Student("Doe",21);
console.log(Student.studentCount);