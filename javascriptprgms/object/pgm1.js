var string="HHHPPSDAAA"

var frequency={}
for (char of string){

     if(char in frequency){
           frequency[char]+=1;

     }
     else{
          frequency[char]=1;
     }
}
var output=""
for (key in frequency){
     output=output+frequency[key]+key

}
console.log(output)