interface Book{
    book_id:number
    book_name:string
}

interface Author{
    author_id:number
    author_name:string
}
type intersected_type=Book&Author
let intersected_type_object1:intersected_type={
    book_id:101,
    book_name:'Typescript is awesome',
    author_id:202,
    author_name:'Tutorialspoint!'
}

console.log('Book Id:'+intersected_type_object1.book_id)
console.log('Book name:'+intersected_type_object1.book_name)
console.log('Author id:'+intersected_type_object1.author_id)