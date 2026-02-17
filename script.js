let questions = [
    {
        question : "which is the largest animal in the world?",
        answers: [
            { text:"Shark" , correct : false},
            { text :"Blue whale" , correct : true},
            { text :"Elephant" , correct : false},
            { text :"Giraffe" , correct : false},
        ]
    },
      {
        question : "which is largest desert in the world?",
        answers: [
            { text:"Kalahari" , correct : false},
            { text :"Gobi" , correct : false},
            { text :"Sahara" , correct : false},
            { text :"Antarctica" , correct : true},
        ]
    },
      {
        question : "which is smallest country in the world?",
        answers: [
            { text:"Vatican City" , correct : true},
            { text :"Bhutan" , correct : false},
            { text :"Nepal" , correct : false},
            { text :"Shrilanka" , correct : false},
        ]
    },
      {
        question : "which is the smallest continent in the world?",
        answers: [
            { text:"Asia" , correct : false},
            { text :"Australia" , correct : true},
            { text :"Arctic" , correct : false},
            { text :"Africa" , correct : false},
        ]
    },
]
let questionElement = document.querySelector("#question")
let answerButton = document.querySelector(".answer-button")
let next  = document.querySelector(".next-button")
let score = 0
let currentQuestion = 0
function showQuestion(){
    resetQuestion()
   let currentQ = questions[currentQuestion]
    let questionNo = currentQuestion +1
    questionElement.innerHTML = questionNo +"."+currentQ.question
    currentQ.answers.forEach(answer =>{
        let button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
function selectAnswer(e){
    let selectedBtn = e.target
    let isCorrect = selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct =="true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    next.style.display = "block"
}
function startQuiz(){
    score = 0
    currentQuestion = 0
    next.innerHTML ="Next"
    showQuestion()
}
function showScore(){
    resetQuestion()
    questionElement.innerHTML = `you Scored ${score} out of ${questions.length}`
    next.innerHTML = "Play Again"
    next.style.display = "block"
}
function handleNextButton(){
    currentQuestion ++ 
    if(currentQuestion < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}
next.addEventListener('click',function(){
    if(currentQuestion<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
function resetQuestion(){
    next.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
startQuiz()
