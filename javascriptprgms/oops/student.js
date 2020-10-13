class Student{
      setStudent(rollno,name,div){
          this.rollno=rollno;
          this.name=name;
          this.div=div;
      }
      getStudent(){
          console.log("rollno="+this.rollno);
          console.log("name="+this.name);
          console.log("div="+this.div)

     }
}
let obj=new Student()
obj.setStudent(1001,"binu",10);
obj.getStudent()