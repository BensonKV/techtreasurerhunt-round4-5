const correctAnswer = "TECHTREASURERHUNT{atbash_crack_92533667}"; 

function checkInput() {
    const userInput = document.getElementById("userInput").value; 
    const resultDiv = document.getElementById("result");

    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Correct! Redirecting...";
        resultDiv.style.color = "green";
        
        setTimeout(() => {
            window.location.href = "../techtreasurerhunt-round5(2)/index.html"; 
        }, 2000); 
    } else {
        resultDiv.textContent = "Incorrect! Please try again.";
        resultDiv.style.color = "red";
    }
}