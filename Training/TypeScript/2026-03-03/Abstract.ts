abstract class sample{
    property1:string;

    constructor(property1:string,property2:number){
        this.property1=property1;

    }

    //abstract methods
    abstract demo():void;

    //non-abstract method in abstract class
    save():void{
        console.log("The save method of the abstract class is executed");

    }
}

    class test extends sample{
        property2:number;
        constructor(property1:string,property2:number){
            super(property1,property2);
            this.property2=property2;
        }
        demo():void{
            console.log("The value of the property3 is "+this.property2);
        }
    }
    let test_obj=new test("TutorialsPoint",999);
    test_obj.demo();
    test_obj.save();

