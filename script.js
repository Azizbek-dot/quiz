const questions = [
    {
      question: "JavaScript-ni qaysi HTML elementiga joylashtiramiz?",
      answers: [
        { text: "Script", correct: true },
        { text: "js", correct: false },
        { text: "Javascript", correct: false },
        { text: "style", correct: false }
      ]
    },
    {
      question: "Alertda Hello worldni qanday yozish mumkin?",
      answers: [
        { text: "alert(Hello world)", correct: true },
        { text: "alert{Hello world}", correct: false },
        { text: "alertBox{Hello Worl}", correct: false },
        { text: "alert[Hello world]", correct: false }
      ]
    },
    
      {
        question: "JavaScript-da qanday qilib funksiya yaratasiz?",
        answers: [
            { text: "function = myFun()", correct: false },
            { text: "function myFun()", correct: true },
          { text: "function:myFun()", correct: false }
        ]
      },
      {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: ":comment:", correct: false },
            { text: "`comment`", correct: false },
            { text: "//Comment", correct: true }
        ]
      }                
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Keyingi";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answersElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    answersElement.innerHTML = "";
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("wrong");
    }
  
    Array.from(answersElement.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") button.classList.add("correct");
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.innerText = `Siz ${questions.length} ta savoldan ${score} tasiga to'g'ri javob berdingiz.`;
  }
  
  startQuiz();
  