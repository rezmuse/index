document.addEventListener("DOMContentLoaded", () => {
    // Hide all questions and final message on page load
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("finalMessage").style.display = "none";
});

function showQuestions() {
    // Hide initial heartfelt message and continue button
    document.querySelector(".heartfelt-message").style.display = "none";
    document.querySelector(".continue-button-container").style.display = "none";

    // Show the question container and first question
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
}

// Function to handle next question or final response
function nextQuestion(answer, questionNumber) {
    // Hide current question
    document.getElementById(`question${questionNumber}`).style.display = "none";

    // If it's the last question, show final message
    if (questionNumber === 2) {
        document.getElementById("finalMessage").style.display = "block";
        document.getElementById("responseMessage").innerHTML =
            answer === "yes"
                ? "Yeppi! I miss you already ,but koina I'll wait for you, you mean a lot to me n yeah i do mean it. You're the one! ❤️ I love you and I mean it❤️ "
                : "Oh no! But we can still be friends, right?(you weren't allowed to say no) 😊";
    } else {
        // Show next question if available
        let nextQ = document.getElementById(`question${questionNumber + 1}`);
        if (nextQ) {
            nextQ.style.display = "block";
        }
    }
}