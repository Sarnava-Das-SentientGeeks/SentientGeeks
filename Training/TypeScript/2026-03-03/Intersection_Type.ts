interface Student {
   student_id: number
   student_name: string
}

interface Class {
   class_id: number
   class_name: string
}

interface Subject {
   subject_id: number
   subject_name: string
}

type intersected_type_1 = (Student & Class) & Subject
type intersected_type_2 = Student & (Class & Subject)

let intersected_type_object1: intersected_type_1 = {
   student_id: 101,
   student_name: 'Typescript',
   class_id: 10,
   class_name:"Math",
   subject_id: 1,      
   subject_name: 'CS' 
}

let intersected_type_object2: intersected_type_2 = {
   student_id: 102,
   student_name: 'Typescript2',
   class_id: 11,
   class_name:"Science",
   subject_id:2,
   subject_name:"Math"
}

console.log(typeof intersected_type_object1 === typeof intersected_type_object2)