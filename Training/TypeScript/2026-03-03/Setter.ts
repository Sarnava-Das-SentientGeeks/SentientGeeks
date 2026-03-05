class TextContainer{
    private _content:string='';

    //Setter method
    set content(value:string){
        this._content=value.trim().toLowerCase();
    }

    //Getter method
    get content():string{
        return this._content;
    }
}
const text=new TextContainer();
text.content=" Hello, World! ";
console.log(text.content);