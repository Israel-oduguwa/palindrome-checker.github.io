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
    const wordU = word.toLowerCase()
    for( var i = 0; i < wordU.length; i++){
        alphabets.push(wordU[i])
    };
    
    for(var i = 0; i< wordU.length; i++){
        Pally += alphabets.pop();
        
    };

    if (Pally === wordU){
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

/* class mySet {
    constructor() {
        var collection = [];
        //this will cehck for the indexOf( position of the element in a set or array) of the or the prsence of an element
        this.has = (element) => {
            //this.will return element if the element is not -1 ioe if the element is there
            return (collection.indexOf(element) !== -1);
        };
        this.values = (element) => {
            return collection;
        };
        this.add = (element) => {
            if (!this.has(element)) {
                collection.push(element);
                return true;
            }
            return false;
        };
        this.remove = (element) => {
            if (this.has(element)) {
                index = collection.indexOf(element);
                collection.splice(index, 1);
                return true;
            }
            return false;
        };
        this.size = (element) => {
            return collection.length;
        };
        this.union = (otherSet) => {
            var unionSet = new myUnionSet();
            var setA = this.values();
            var setB = otherSet.values();
            setA.forEach((element) => {
                unionSet.add(element);
            });
            setB.forEach((element) => {
                unionSet.add(element);
            });
            return unionSet;
        };
        this.intersectionSet = (otherSet) => {
            var interSect = new myInterSect();
            var setA = this.values();
            
            setA.forEach((e) => {
                if (otherSet.has(e)) {
                    intersectionSet.add(e);
                }
            });
            return interSect;
        };
    }
}

var setA = new mySet;
var setB  = new mySet();

setA.add("a")
setB.add("d")
setB.add("a")
console.log(setA.intersectionSet(setB))
/*var list =["man" ,"woman" ," girl" ,"boy"] */