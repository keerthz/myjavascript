var string="BCEDDERRFFSD"
var ar=[]
var object={}
for (letters of string){
    ar.push(letters)
console.log(ar)
}
for (word of ar){
    if(word in object){
         object[word]=1
    }
    else{
       console.log("first recursive word",word)
      break
    }
    }
