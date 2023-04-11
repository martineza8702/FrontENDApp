const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    //alert("Correct!");
    element.classList.add('correct')
   // score++;
    
  } else {
   // alert("Wrong!");
    element.classList.add('wrong')
    
  }
}
//alert("You got " + score + "/" + questions.length);

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<javascript>', correct: false },
      { text: '<script>', correct: true },
      { text: '<js>', correct: false },
      { text: '<scripting>', correct: false },
    ]
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      { text: 'The <head> section', correct: false },
      { text: 'The <body> section', correct: false },
      { text: 'Both the <head> and <body> section', correct: true },
    ]
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: true },
      { text: 'alert("Hello World");', correct: false },
      { text: 'msgBox("Hellow World");', correct: false },
    ]
  },
  {
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true },
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Creative Style Sheets', correct: false },
      { text: 'Colorful Style Sheets', correct: false },
    ]
  },
  {
    question: 'What is the correct HTML for referring to an external style sheet?',
    answers: [
      { text: '<stylesheet>mystyle.css</stylesheet>', correct: false },
      { text: '<style src="mystlye.css">', correct: false },
      { text: '<link rel="stylesheet" type="text/css" href="mystyle.css">', correct: true },
    ]
  },
  {
    question: 'What is the correct CSS syntax?',
    answers: [
      { text: 'body{color: black;}', correct: true },
      { text: 'body:color=black;', correct: false },
      { text: '{body;color:black;}', correct: false },
      { text: '{body:color=black;}', correct: false },
    ]
  },
  {
    question: 'Which property is used to change the background color?',
    answers: [
      { text: 'background-color', correct: true },
      { text: 'bgcolor', correct: false },
      { text: 'color', correct: false },
    ]
  },
]
  

