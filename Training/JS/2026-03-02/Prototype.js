function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log("Hello, my name is "+this.name);
}

function Student(name,grade){
    Person.call(this,name)
}