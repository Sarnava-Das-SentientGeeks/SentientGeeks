interface Todo{
    title:string;
    description:string;
}

type OptionalTodo=Partial<Todo>;

type TodoPick=Pick<Todo,"title">;

let todo:OptionalTodo={title:"Buy milk"};
console.log(todo);
