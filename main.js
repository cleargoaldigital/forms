console.log('Hello World!');

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}
let duck = new Bird();
duck.getWeight();
console.log(Bird());


const eventColor = document.querySelector('button');
const body = document.querySelector('body');
const header = document.querySelector('.title-header');
document.body.style.backgroundColor = 'green';
document.body.style.color = "#fed";
eventColor.textContent = "Change text and background colour";


header.style.color = "blue";

eventColor.addEventListener('click', () => {
    if(body.style.backgroundColor === 'green'){
      body.style.backgroundColor = 'orange';
      body.style.color = 'blue';
      eventColor.textContent = "You've selected orange";
      header.style.color = "red";
    }
  else if(body.style.backgroundColor=== "orange"){
    body.style.backgroundColor = "red";
    body.style.color = "#eee";
    eventColor.textContent = "Red is the colour of love";
    header.style.color = "#000";
  }
  else {
    body.style.backgroundColor = "green";
    body.style.color = "#fff";
    eventColor.textContent = "You've returned to default colour";
    header.style.color = "orange";
  }
});   


const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
submit.addEventListener('click', ()=>{
  confirm("Have you confirmed the details you supplied?")
})
reset.addEventListener('click', ()=>{
  confirm("Are you sure to reset the form?")
})

// Conversion to Roman Numerals: A freeCodeCamp Project

function convertToRoman(num) {
  let result = "";
  
  while (num >= 1000){
      result += "M";
      num -= 1000;
    }
  
  while (num >= 900){
      result += "CM";
      num -= 900;
    }
  
  while (num >= 500){
      result += "D";
      num -= 500;
    }
  
  while (num >= 400){
      result += "CD";
      num -= 400;
    }
  
  while (num >= 100){
      result += "C";
      num -= 100;
    }
  
  while (num >= 90){
      result += "XC";
      num -= 90;
    }
  
  while (num >= 50){
      result += "L";
      num -= 50;
    }
  
  while (num >= 40){
      result += "XL";
      num -= 40;
    }
  
  while (num >= 10){
      result += "X";
      num -= 10;
    }
  
  while (num === 9){
      result += "IX";
      num -= 9;
    }
  
  while (num >= 5){
      result += "V";
      num -= 5;
    }
  
  while (num >= 4){
      result += "IV";
      num -= 4;
    }
  while (num === 3){
      result += "III";
      num -= 3;
    }
   while (num === 2){
      result += "II";
      num -= 2;
    }
    while (num === 1){
      result += "I";
      num -= 1;
    }
   return result;
  }
  
  console.log(convertToRoman(1999));

  // Ceasar Cipher: A freeCodeCamp Project.

  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];

function rot13(str) {
 let resulti = "";
 for(let i = 0; i < str.length; i++){
 const char = str[i];
 const isALetter = alphabets.includes(char);
 if (isALetter === false){
   resulti += char;
 } else{
   const charIndex = alphabets.findIndex((e) => e === char);
   resulti += alphabets[charIndex + 13] || alphabets[charIndex - 13];
 }
}
return resulti;
}
console.log(rot13("SERR PBQR PNZC"));

//Telephone Number Validation: A freeCodeCamp Project

function telephoneCheck(str) {

  const validCode = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  // const validCode = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
  // validCoded = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  
  if(validCode.test(str)){
    return true;
  } else{
    return false
    // return rex2.test(str) ? true : false;
  }};
  
  console.log(telephoneCheck("(123) 456 7890"));