class BoxingClass{
    my_number:number=123;
    my_object:Object | undefined;

    boxingMethod(){
        this.my_object=this.my_number;
        console.log("Boxing");
    }
}

let myObj=new BoxingClass();
myObj.boxingMethod();
console.log(myObj.my_object);