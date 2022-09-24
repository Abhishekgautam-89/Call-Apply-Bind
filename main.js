class Student{
    static count = 0;
    constructor(name, age, phonenumber, boardmarks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.boardmarks=boardmarks;
        Student.count++;
    }    
    eligibleForPlacements(minBoardMarks){
        return (minAge)=>{ 
            if(this.boardmarks>minBoardMarks && this.age>minAge){
            console.log(`${this.name} is eligible for placements.`);
            }  
            else
            console.log(`${this.name} is not eligible.`);
        }
   }
   static countStudents(){
    console.log(`Total no. of students ${Student.count}`);
   }
}

let Student1= new Student('Ankit', 22, 123421, 58);
let Student2= new Student('Amit', 22, 121234, 65);
let Student3= new Student('Ankit', 25, 123415, 62);
let Student4= new Student('Sunil', 15, 125534, 59);
let Student5= new Student('Akhil', 15, 15234, 55);

var arrayOfStudents = [Student1, Student2, Student3, Student4, Student5];
for(let i=0; i<arrayOfStudents.length; i++){
    arrayOfStudents[i].eligibleForPlacements(60)(21);
}
Student.countStudents();