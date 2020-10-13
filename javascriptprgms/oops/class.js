//class
//object
//reference


class Person{
      setPerson(id,name){
          this.id=id;
          this.name=name;
      }
      getPerson(){
          console.log("id="+this.id);
          console.log("name="+this.name);

     }
}

///object
let obj=new Person()
obj.setPerson(1001,"binu");
obj.getPerson()