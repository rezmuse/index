document.addEventListener("DOMContentLoaded", () => {
    // Hide all questions and final message on page load
    const elementsToHide = ["questionContainer", "question1", "question2", "finalMessage"];
    elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });
});

function showQuestions() {
    // Hide initial heartfelt message and continue button
    const heartfeltMessage = document.querySelector(".heartfelt-message");
    const continueButtonContainer = document.querySelector(".continue-button-container");

    if (heartfeltMessage) heartfeltMessage.style.display = "none";
    if (continueButtonContainer) continueButtonContainer.style.display = "none";

    // Show the question container and first question
    const questionContainer = document.getElementById("questionContainer");
    const firstQuestion = document.getElementById("question1");

    if (questionContainer) questionContainer.style.display = "block";
    if (firstQuestion) firstQuestion.style.display = "block";
}

// Function to handle next question or final response
function nextQuestion(answer, questionNumber) {
    const currentQuestion = document.getElementById(`question${questionNumber}`);
    if (currentQuestion) currentQuestion.style.display = "none";

    // If it's the last question, show final message
    if (questionNumber === 2) {
        const finalMessage = document.getElementById("finalMessage");
        const responseMessage = document.getElementById("responseMessage");

        if (finalMessage && responseMessage) {
            finalMessage.style.display = "block";
            responseMessage.innerHTML =
                answer === "yes"
                    ? "Yeppi! I miss you already, but koina I'll wait for you. You mean a lot to me, and yeah, I do mean it. You're the one! ❤️ I love you and I mean it ❤️"
                    : answer === "no"
                    ? "Oh no! But we can still be friends, right? (you weren't allowed to say no) 😊"
                    : "It's okay, take your time. No matter what, I'll always be here for you. 💕";
        }
    } else {
        // Show next question if available
        const nextQ = document.getElementById(`question${questionNumber + 1}`);
        if (nextQ) nextQ.style.display = "block";
    }
}
