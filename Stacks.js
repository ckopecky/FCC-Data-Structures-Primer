/* Stacks! 

last in, first out. think stack of pancakes or browser's back button

functions: pop, push, peek, length

Array object already has all the function you need
const isStack = (word) => {
  let letters = [];
  let reverseWord = "";

    //put letters of word into stack

  for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
  }

    //pop off the stack in reverse order;

  for(let i = 0; i < word.length; i++){
    reverseWord += letters.pop();
  }

  if(reverseWord === word){
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}
*/

//class constructor using object.
/*
class Stack {
  constructor(){
    this.storage = {};
    this.count = 0;
  }
  
  pushElement(value){
    this.storage[this.count] = value;
    this.count++;
  }
  
  popElement(){
    if(this.count === 0){
      return null;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  
  sizeStorage(){
    return this.count;
  }
  
  peekElement(){
    return this.storage[this.count - 1];
  }
}
*/

//class constructor using array

class Stack {
    constructor(){
      this.storage = [];
    }
    
    pushElement(value){
      this.storage.push(value);
    }
    
    popElement(){
      if(this.storage.length === 0){
        return null;
      } else {
        return this.storage.pop();
      }
    }
    
    sizeStorage(){
      return this.storage.length;
    }
    
    peekElement(){
      return this.storage[this.storage.length - 1];
    }
  }
  
  let myStack = new Stack();
  myStack.pushElement(1);
  myStack.pushElement(2);
  myStack.pushElement("freeCodeCamp")
  console.log(myStack.peekElement(), "peek");
  console.log(myStack);
  myStack.popElement();
  console.log(myStack.peekElement(), "peek");
  console.log(myStack);
  console.log(myStack.sizeStorage(), "size")