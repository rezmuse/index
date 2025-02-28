document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("finalMessage").style.display = "none";
});

function showQuestions() {
    document.querySelector(".heartfelt-message").style.display = "none";
    document.querySelector(".continue-button-container").style.display = "none";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
}

function nextQuestion(answer, questionNumber) {
    document.getElementById(`question${questionNumber}`).style.display = "none";

    if (questionNumber === 2) {
        document.getElementById("finalMessage").style.display = "block";
        document.getElementById("responseMessage").innerHTML =
            answer === "yes"
                ? "Yeppi! You're the one! ❤️ I love you and I mean it! ❤️"
                : "Oh no! But we can still be friends, right? 😊";
    } else {
        let nextQ = document.getElementById(`question${questionNumber + 1}`);
        if (nextQ) {
            nextQ.style.display = "block";
        }
    }
}
