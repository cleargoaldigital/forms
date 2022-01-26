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
document.body.style.backgroundColor = 'green';
document.body.style.color = "#fed";
eventColor.textContent = "Change text and background colour";

eventColor.addEventListener('click', () => {
    if(document.body.style.backgroundColor === 'green'){
      document.body.style.backgroundColor = 'orange';
      document.body.style.color = 'skyblue';
      eventColor.style.backgroundColor = "blue";
    }
  else if(document.body.style.backgroundColor=== "orange"){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#feddef";
    eventColor.textContent = "Akanbi";
  }
  else {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "#fff";
    eventColor.textContent = "Abdulhayy";
    eventColor.style.backgroundColor = "red";
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