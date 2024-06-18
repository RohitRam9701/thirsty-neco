let a = prompt("Hey whats you age?");
console.log(typeof a); // Output: string
a = Number.parseInt(a); // Converting the string to a number
console.log(typeof a); // Output: number
// If Statement
/* 
if(a>17){
     alert("This is a valid age and you can drive");
}  
*/
// If-Else Statement
/* 
if(a>17){
  alert("This is a valid age and you can drive");
}  
else {
  alert("This is an invalid age and you can't drive);   
}
*/

// If-Else-If statement 
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
console.log("You can", (a<18? "not drive" :"drive"));