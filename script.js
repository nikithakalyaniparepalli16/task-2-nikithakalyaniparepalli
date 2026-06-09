const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(li => {
            li.classList.remove("active");
        });

        item.classList.add("active");

    });
});

document.addEventListener("click", (e) => {

    if(
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){
        sidebar.classList.remove("active");
    }

});

const pages = document.querySelectorAll(
"#dashboard-page, #categories-page, #quizzes-page, #leaderboard-page"
);

function hideAllPages(){
    pages.forEach(page=>{
        page.style.display="none";
    });
}

document.getElementById("dashboard-link").onclick=()=>{
    hideAllPages();
    document.getElementById("dashboard-page").style.display="block";
};

document.getElementById("categories-link").onclick=()=>{
    hideAllPages();
    document.getElementById("categories-page").style.display="block";
};

document.getElementById("quizzes-link").onclick=()=>{
    hideAllPages();
    document.getElementById("quizzes-page").style.display="block";
};

document.getElementById("leaderboard-link").onclick=()=>{
    hideAllPages();
    document.getElementById("leaderboard-page").style.display="block";
};
const questions = [

{
    question:"Which organelle is known as the powerhouse of the cell?",
    options:[
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Golgi Body"
    ],
    answer:"Mitochondria"
},

{
    question:"What is the basic unit of life?",
    options:[
        "Cell",
        "Tissue",
        "Organ",
        "Atom"
    ],
    answer:"Cell"
},

{
    question:"Which blood cells fight infections?",
    options:[
        "RBC",
        "WBC",
        "Platelets",
        "Plasma"
    ],
    answer:"WBC"
}

];

let currentQuestion = 0;
let score = 0;

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

    let q = questions[currentQuestion];

    questionEl.textContent =
    q.question;

    optionsEl.innerHTML="";

    q.options.forEach(option=>{

        const btn =
        document.createElement("button");

        btn.classList.add("option-btn");

        btn.textContent = option;

        btn.onclick = ()=>checkAnswer(option);

        optionsEl.appendChild(btn);

    });
}

function checkAnswer(selected){

    let correct =
    questions[currentQuestion].answer;

    const buttons =
    document.querySelectorAll(".option-btn");

    buttons.forEach(btn=>{

        btn.disabled=true;

        if(btn.textContent===correct){
            btn.style.background="#22c55e";
        }

        if(
            btn.textContent===selected &&
            selected!==correct
        ){
            btn.style.background="#ef4444";
        }

    });

    if(selected===correct){
        score++;
    }
}

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }else{

        showResult();

    }

});

loadQuestion();

function showResult(){

    document.querySelector(".quiz-container")
    .innerHTML = `

        <div class="result-card">

            <h1>🎉 Quiz Completed</h1>

            <h2>
                Score:
                ${score}/${questions.length}
            </h2>

            <button onclick="location.reload()">
                Try Again
            </button>

        </div>

    `;
}
