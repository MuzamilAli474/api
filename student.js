let students = [
    { name: "Student 1", marks: [80, 90, 70,85] },
    { name: "Student 2", marks: [85, 75, 95] },
    { name: "Student 3", marks: [60, 65, 70] }
];

  students.forEach(student=>{
    // console.log(student)
    let totalMarks=student.marks.reduce((sum,curntmarks)=>sum+curntmarks)
// console.log(totalMarks)    
    let persentage=totalMarks/student.marks.length;
    // console.log(persentage);
    
    let grade;
    if(persentage>90){
      grade='A';
    }else if(persentage>80){
      grade='B';
    } else if(persentage>70){
      grade='C';
    }else if(persentage>60){
      grade='D';
    }else if(persentage>50){
      grade='E';
    }else{
      grade='F'
    }
    
    student.grade=grade;
    
    
  })
  console.log(students)