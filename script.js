const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex ])
}

function newFunction() {
    resetState()
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

function resetState(){
    clearStatuseClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e. target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions. lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Далее'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
clearStatuseClass(element)
if (correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatuseClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Наука экология изучает…',
        answers: [
            { text: 'Взаимодействие между живыми организмами и окружающей средой', correct: true },
            { text: 'Программирование', correct: false }
     ]
    },
    {
        question: 'Какие из нижеперечисленных резервуаров хранят больше всего пресной воды?',
        answers: [
            { text: 'Ледники, айсберги, полярные снега', correct: true },
            { text: 'Искусственные водоемы', correct: false }
        ]
    },
    {
        question: 'Кого называют экологическими террористами',
        answers: [
            { text: 'Тех, кто умышленно наносит масштабные загрязнения', correct: true },
            { text: 'участников «зеленых» митингов и парадов', correct: false }
        ]
    },
    {
        question: 'Какая наука изучает характер и поведение животных',
        answers: [
            { text: 'Экология', correct: false },
            { text: 'Зоология', correct: true }
        ]
    }
]
  

