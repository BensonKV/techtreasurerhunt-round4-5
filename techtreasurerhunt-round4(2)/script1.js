const correctAnswer = "TECHTREASURERHUNT{web_succ3ssfully_d3c0ded_07b91c79}"; 

        function checkInput() {
            const userInput = document.getElementById("userInput").value;
            const resultDiv = document.getElementById("result");

            if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                resultDiv.textContent = "Correct! Redirecting...";
                resultDiv.style.color = "green";
                
                setTimeout(() => {
                    window.location.href = "../techtreasurerhunt-round4(3)/begin2.html"; 
                }, 2000); 
            } else {
                resultDiv.textContent = "Incorrect! Please try again.";
                resultDiv.style.color = "red";
            }
        }