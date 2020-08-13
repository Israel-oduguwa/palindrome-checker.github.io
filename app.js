//inputs
const inputForm = document.getElementById("checkerForm");
const Message = document.getElementById("message");
const Reverse = document.getElementById("reverse");

var alphabets = [];
var Pally = "";
const inputValue = document.getElementById("inputValue");
inputForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
   const word = inputValue.value;
  
    for( var i = 0; i < word.length; i++){
        alphabets.push(word[i])
    };
    
    for(var i = 0; i< word.length; i++){
        Pally += alphabets.pop();
        
    };

    if (Pally === word){
        Message.textContent= word +" is a palindrome";
        
    }
    else{
        Message.textContent= word +" is not a palindrome";
       
    }
    Pally =""
})
inputValue.addEventListener("keypress", (e) =>{
    Message.textContent="";
    Reverse.textContent=""
})
