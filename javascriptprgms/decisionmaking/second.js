var num1=10
var num2=20
var num3=30
if((num2>num1) & (num1>num3)){
    console.log("num1 is largest",num1);}
else if((num3>num2) & (num2>num1)){
    console.log("num2 is largest",num2);}
else if((num1>num3) & (num3>num2)){
    console.log("num3 is largest",num3);}
else if((num1==num2) & (num2==num3)){
    console.log("they are equall");}