class Parent{
    id:number
    constructor(id:number){
        this.id=id
    }
}

class Child extends Parent{

    name:string
    constructor(id:number,name:string){
        super(id)
        this.name=name
    }
}
class Dummy{
    dummy:string
    constructor(x:string)
    {
        this.dummy=x
    }
}

let child=new Child(101,"ABC")

console.log(child instanceof Child)
console.log(child instanceof Parent)
console.log(child instanceof Dummy)