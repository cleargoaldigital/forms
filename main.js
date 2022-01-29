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
body.style.backgroundColor = 'green';
body.style.color = "#fed";
/* eventColor.textContent = "Change text and background colour";

eventColor.addEventListener('click', () => {
  if (body.style.backgroundColor === 'green') {
    body.style.backgroundColor = 'orange';
    body.style.color = 'skyblue';
    eventColor.style.backgroundColor = "blue";
  } else if (body.style.backgroundColor === "orange") {
    body.style.backgroundColor = "red";
    body.style.color = "#feddef";
    eventColor.textContent = "Akanbi";
  } else {
    body.style.backgroundColor = "green";
    body.style.color = "#fff";
    eventColor.textContent = "Abdulhayy";
    eventColor.style.backgroundColor = "red";
  }
});
*/
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
submit.addEventListener('click', ()=> {
  confirm("Have you confirmed the details you supplied?")
})
reset.addEventListener('click', ()=> {
  confirm("Are you sure to reset the form?")
})

function convertToRoman(num) {
  let result = "";

  while (num >= 1000) {
    result += "M";
    num -= 1000;
  }

  while (num >= 900) {
    result += "CM";
    num -= 900;
  }

  while (num >= 500) {
    result += "D";
    num -= 500;
  }

  while (num >= 400) {
    result += "CD";
    num -= 400;
  }

  while (num >= 100) {
    result += "C";
    num -= 100;
  }

  while (num >= 90) {
    result += "XC";
    num -= 90;
  }

  while (num >= 50) {
    result += "L";
    num -= 50;
  }

  while (num >= 40) {
    result += "XL";
    num -= 40;
  }

  while (num >= 10) {
    result += "X";
    num -= 10;
  }

  while (num === 9) {
    result += "IX";
    num -= 9;
  }

  while (num >= 5) {
    result += "V";
    num -= 5;
  }

  while (num >= 4) {
    result += "IV";
    num -= 4;
  }
  while (num === 3) {
    result += "III";
    num -= 3;
  }
  while (num === 2) {
    result += "II";
    num -= 2;
  }
  while (num === 1) {
    result += "I";
    num -= 1;
  }
  return result;
}


console.log(convertToRoman(1999));

// Ceasar Cipher

const alphabets = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z",
];

function rot13(str) {
  let resulti = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabets.includes(char);
    if (isALetter === false) {
      resulti += char;
    } else {
      const charIndex = alphabets.findIndex((e) => e === char);
      resulti += alphabets[charIndex + 13] || alphabets[charIndex - 13];
    }

  }

  return resulti;
}
console.log(rot13("SERR PBQR PNZC"));

// Array.may()
let users = [{
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobby: "Singing"
},
  {
    firstName: "Daniel",
    lastName: "Longbottom",
    age: 16,
    hobby: "Football"
  },
  {
    firstName: "Jacob",
    lastName: "Black",
    age: 15,
    hobby: "Singing"
  }];

let singleUser = users.map((user)=> {
  //let's add the firstname and lastname together
  let fullName = user.firstName + ' ' + user.lastName;
  let finalName = `
  <h3 class='name'>${fullName}</h3>
  <p class="age">${user.age}</p>
  `
  return finalName;

});
console.log(singleUser);