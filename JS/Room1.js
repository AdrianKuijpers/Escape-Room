
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function () {
  const owntext1 = document.querySelector(".own-text1");
  let text = prompt("Enter your answer").toLowerCase();
  if (text != "f") 
  owntext1.textContent = ("That answer is incorrect...");
  else owntext1.textContent = ("The answer is the letter f!")
});


const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function () {
  const owntext2 = document.querySelector(".own-text2");
  let text = prompt("Enter your answer");
  if (text === "12")   
  owntext2.textContent = ("The answer is the number 12!");
  else if (text === "31556926")
  owntext2.textContent = ("The answer is technically correct, but it's the number 12.");
  else if (text === "31,556,926")
  owntext2.textContent = ("The answer is technically correct, but it's the number 12.");
  else if (text === "31536000")
  owntext2.textContent = ("The answer is technically correct, but it's the number 12.");
  else if (text === "31,536,000")
  owntext2.textContent = ("The answer is technically correct, but it's the number 12.");
  else 
  owntext2.textContent = ("That answer is incorrect...");
});

console.log("You completed the puzzle!")
console.log("The 1st number is 2")

const hintBtn = document.querySelector(".hint-Btn")
const hintDiv = document.querySelector(".hint-div")
hintBtn.addEventListener("click", function(){
hintDiv.textContent = ":Combine the answers and press the key"
});

const returnBtn = document.querySelector(".btn.btn-primary.return-btn")
returnBtn.addEventListener("click", function(){
    window.location.href = 'index.html';
});