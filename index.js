const submitButton = document.getElementById("submit");
const userName = document.getElementById("userName");
const welcomeText = document.querySelector("span");
const restartGame = document.getElementById("newGame");
const questioN = document.getElementById("questioN")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const answers = document.querySelectorAll('.answer')
const showScore = document.getElementById("showScore")
const countDownEl =document.getElementById('countDown')

// userName.addEventListener("input", () => {
//   welcomeText.innerText = userName.value;
// });

const questions = [
  {
    question: " Which of the following will not cause any atmospheric pollution?",

    a: "Sulphur Dioxide",
    b: "Hydrogen",
    c: "Carbon monoxide",
    d: "Carbon dioxide"

    ,
    ans: "ans2"
  },
  {
    question: "Which of the following is the best example of Greenhouse effect?",

    a: "Sunlight warms your car",
    b: "Weather change",
    c: "Sea Breezes",
    d: " Cloud Bursting",

    ans: "ans1"
  },
  {
    question: "When the problem of ozone depletion was first identified? ",

    a: "1968",
    b: "1969",
    c: "1970",
    d: "1971",

    ans: "ans3"
  },
  {
    question: "Sewage water can be purified for recycling with the action of ",

    a: "aquatic plants",
    b: "microorganisms",
    c: "penicillin",
    d: "fishes",

    ans: "ans2"

  },
  {
    question: "Which of the following is not related with the sources of Air pollution? ",

    a: "Volcanic Emissions",
    b: "Fuel combustion in vehicular traffic",
    c: "Acid Rains",
    d: "Petroleum Refining",

    ans: "ans3"
  },
  {
    question: "Photochemical smog is related to the pollution of ",

    a: "soil",
    b: "water",
    c: "noise",
    d: "air",

    ans: "ans4"
  },
];

  restartGame.addEventListener("click", () => {
    location.href = 'index.html';
  
  });

  let questionNo = 0;
  let score=0;
  const loadQuestion = () => {
    const questionList = questions[questionNo];
    questioN.innerText = questionList.question;


    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
  }
  loadQuestion();
  submitButton.addEventListener('click', () => {
const  checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer === questions[questionNo].ans){
score++;
console.log(score);
};
    questionNo++;
    if (questionNo < questions.length){
      loadQuestion();}
      else{
        if(score==1){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h3>You are new little environmentalist. Join us and learn more😇 </h3> `}
       else if(score==2){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
        <h3> Try Again!🤗</h3>`}
      else if(score==3){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct Better luck next time!</h3>
       `}
      else if(score==4){
        showScore.innerHTML = ` <h3>You got ${score} out of ${questions.length} correct </h3>
       <h3>Join us and learn more. Better luck next time!😊 </h3>
       `}
      else if(score==5){
        showScore.innerHTML = ` <h3>Yay You got ${score} out of ${questions.length} correct You're aware about environment degradation. Join us</h3>
       `}
      else if(score==6) {
        showScore.innerHTML = ` <h3>Wohoo! You got ${score} out of ${questions.length} correct </h3> <h3>You are an active environmentalist🤩. 
        Join us and Let's make our planet a better place😇.</h3> `}

        showScore.classList.remove('scoreArea');
      }

  });
  const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAns)=>{
      if(currentAns.checked){
        answer =currentAns.id;
      }
      
    }
   
    );
    return answer;

  };
  const startingMinutes =2;
  let time=startingMinutes*60;
setInterval(updateCountdown,1000);
function updateCountdown(){
const minutes =Math.floor(time/60);
let seconds =time%60;
seconds=seconds<1?'0'+ seconds :seconds;
countDownEl.innerHTML=`${minutes}:${seconds}`;
time--;
if(time==0){
  alert('Time is up')
  location.href = 'index.html'
}
}
