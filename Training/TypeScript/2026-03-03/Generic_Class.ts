class Box<T>{
    val:T;

    constructor(value:T){
        this.val=value;
    }

    //Method to get value
    get():T{
        return this.val;
            }

    set(value:T):void{
        this.val=value;
    }       
}

let box1= new Box<number>(10);
console.log(box1.get());

let box2=new Box<string>("Hello");
console.log(box2.get());
