var num=[10,20,30,40,50,60];
console.log(num[0]);
console.log(num[1]);


num[0]=100;
for (item of num){
    console.log(item)
}
//method for adding a number to a array
num.push(500);
console.log(num)