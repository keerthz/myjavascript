var ar=[10,20,30,40,50]
var element=Number(prompt("enter the num"))
var flag=0;


for (item of ar){
     if(item==element){
       flag=1;
       break;
     }
     else{
      flag=0;
     }
}
if(flag==1){
   console.log("element found")
}
else{
   console.log("element not found")
}

