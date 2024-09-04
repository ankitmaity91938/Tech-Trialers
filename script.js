const questions = [
    {
        id: 1,
        question: "What is your greatest strength?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        id: 2,
        question: "What is your greatest weakness?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    // add more questions here
];

const candidateForm = document.getElementById("candidate-form");
const questionsList = document.getElementById("questions");
const scoreResult = document.getElementById("score-result");

candidateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const candidateData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        answers: []
    };
    questions.forEach((question) => {
        const answer = document.querySelector(`input[name="question-${question.id}"]:checked`);
        candidateData.answers.push({ questionId: question.id, answer: answer.value });
    });
    const score = calculateScore(candidateData);
    scoreResult.innerText = `Your score is: ${score}`;
});

function calculateScore(candidateData) {
    // implement your scoring logic here
    // for now, just return a random score
    return Math.floor(Math.random() * 100);
}

// render questions
questions.forEach((question) => {
    const questionHTML = `
        <li>
            <h3>${question.question}</h3>
            <ul>
                ${question.options.map((option) => `<li><input type="radio" name="question-${question.id}" value="${option}">${option}</li>`).join("")}
            </ul>
        </li>
    `;
    questionsList.innerHTML += questionHTML;
});