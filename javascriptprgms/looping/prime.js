var num=Number(prompt("enter the number for checking prime"))
var flg=0
for (let i=2;i<7;i++){
    if(num%i==0){
        flg=1;
        break;
     }
     }
if(flg==0){
     console.log("prime");
}
else{
    console.log("not prime");
}