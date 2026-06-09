let questions = [];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

// Fetch questions from API
async function fetchQuestions() {
    try {

        const response = await fetch(
            "http://localhost:3000/api/reasoning"
        );

        questions = await response.json();

        console.log(questions);

        if (questions.length > 0) {
            loadQuestion();
        }

    } catch (error) {

        console.log("Error:", error);

        questionEl.textContent =
            "Failed to load questions.";

    }
}

// Load question
function loadQuestion() {

    let q = questions[currentQuestion];

    progressEl.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionEl.textContent =
        q.question;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const btn =
            document.createElement("button");

        btn.classList.add("option-btn");

        btn.textContent = option;

        btn.onclick = () =>
            checkAnswer(option);

        optionsEl.appendChild(btn);

    });
}

// Check answer
function checkAnswer(selected) {

    let correct =
        questions[currentQuestion].answer;

    const buttons =
        document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === correct) {
            btn.style.background = "#22c55e";
        }

        if (
            btn.textContent === selected &&
            selected !== correct
        ) {
            btn.style.background = "#ef4444";
        }

    });

    if (selected === correct) {
        score++;
    }

}

// Next button
nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    } else {

        showResult();

    }

});

// Result
function showResult() {

    document.querySelector(
        ".quiz-container"
    ).innerHTML = `

    <div class="result-card">

        <h1>🎉 Quiz Completed</h1>

        <p class="score-text">
            Your Final Score
        </p>

        <div class="score-number">
            ${score}/${questions.length}
        </div>

        <button
        class="restart-btn"
        onclick="location.reload()">

            Try Again

        </button>

    </div>

    `;
}

// Start
fetchQuestions();