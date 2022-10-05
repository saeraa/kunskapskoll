import questionsArray from "./questions.js";
const question = document.querySelector("#question");
const controls = document.querySelector("#controls");
const start = document.querySelector("#start");
const next = document.querySelector("#next");
const facit = document.querySelector("#facit");
const restart = document.querySelector("#restart");

let qIndex = 0;
let aIndex = -1;
let message;
let points = 0;
let pickedAnswers = [];

const nextQuestionBtn = function () {
  checkCorrect();
  qIndex++;
  getNextQuestion();
}

next.addEventListener("click", nextQuestionBtn);
start.addEventListener("click", getNextQuestion);
restart.addEventListener("click", reset);

function getNextQuestion() {
  start.disabled = true;
  if (!controls.style.display) {
    controls.style.display = "block"
  }
  // disable button until option picked
  next.disabled = true;

  let curQuestion = qIndex + 1;

  if (curQuestion < questionsArray.length + 1) {
    question.innerHTML = `
    <h3><span>${(curQuestion < 10 ? "0" + (curQuestion) : curQuestion)}</span> 
    ${questionsArray[qIndex].question}</h3>
    <label><input type="radio" name="${qIndex}" id="0">${questionsArray[qIndex].answers[0]}</label>
    <label><input type="radio" name="${qIndex}" id="1">${questionsArray[qIndex].answers[1]}</label>
    <label><input type="radio" name="${qIndex}" id="2">${questionsArray[qIndex].answers[2]}</label>
    <label><input type="radio" name="${qIndex}" id="3">${questionsArray[qIndex].answers[3]}</label>
    `
    const selections = Array.from(document.querySelectorAll("input"))
    selections.forEach((selection, i) => {
      selection.addEventListener("click", selectOption)
    });
  } else {
    checkScore();
    question.innerHTML = `
    <p>Inga fler frågor! Du fick ${points} av ${questionsArray.length} möjliga poäng.</p>
    <p>${message}</p>
    `
    facit.disabled = false;
    restart.style.display = "block";
    restart.disabled = false;
  }
}



// facit
const showAnswers = function () {
  facit.disabled = true;
  question.innerHTML = "";
  questionsArray.forEach((questions, i) => {
    question.innerHTML += `<h3><span>${(i + 1 < 10 ? "0" + (i + 1) : i + 1)}</span > ${questions.question}</h3 >
  <label class="${0 == questions.correct ? "correct" : pickedAnswers[i] == 0 ? "picked" : "incorrect"}"><input disabled type="radio" name="${i}" id="0">${questions.answers[0]}</label>
  <label class="${pickedAnswers[i]} ${1 == questions.correct ? "correct" : pickedAnswers[i] == 1 ? "picked" : "incorrect"}"><input disabled type="radio" name="${i}" id="1">${questions.answers[1]}</label>
  <label class="${pickedAnswers[i]} ${2 == questions.correct ? "correct" : pickedAnswers[i] == 2 ? "picked" : "incorrect"}"><input disabled type="radio" name="${i}" id="2">${questions.answers[2]}</label>
  <label class="${pickedAnswers[i]} ${3 == questions.correct ? "correct" : pickedAnswers[i] == 3 ? "picked" : "incorrect"}"><input disabled type="radio" name="${i}" id="3">${questions.answers[3]}</label>
  <p class="explanation">${questions.explanation}</p>
  <hr>
  `
  });
}

facit.addEventListener("click", showAnswers);

// picking an option
const selectOption = function (id) {
  aIndex = id.target.id;

  // enable button to pick next question
  next.disabled = false;
}

// is your answer correct?
const checkCorrect = function () {
  pickedAnswers.push(aIndex)

  if (aIndex == questionsArray[qIndex].correct) {
    points++;
  }
}

// resetting quiz. window.location.reload() would also work here
function reset() {
  console.log("reset")
  start.disabled = false;
  facit.disabled = true;
  restart.style.display = "none";
  restart.disabled = true;
  pickedAnswers = [];
  qIndex = 0;
  aIndex = -1;
  message = "";
  points = 0;
  getNextQuestion();
}

// how many points did you get?
function checkScore() {
  let one = questionsArray.length * 0.60;
  let two = questionsArray.length * 0.80;

  switch (true) {
    case (points < one):
      message = "Nja.. Kanske ska plugga lite mer? 😞"
      break;
    case (points < two):
      message = "Godkänt! 👏"
      break;
    case (points < questionsArray.length):
      message = "Väl godkänt! 🥳"
      break;
    case (points == questionsArray.length):
      message = "Full pott! Snyggt jobbat! 🤩"
      break;
  }
}



/* 
* write questions
* display question + matching answers
* select one answer
* press new question
* if correct, add +1 score
* if not all questions answered: display new question
* if all questions answered: display results
  disable new question button
  new buttons: play again? / show explanations
* if play again: clear score
*/