const correctAnswers = ["TECHTREASURERHUNTINDIAN", "TECHTREASURERHUNT{INDIAN}"];

function checkInput() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (correctAnswers.some(answer => answer.toLowerCase() === userInput)) {
        resultDiv.textContent = "🎉 Congratulations! Opening password page...";
        resultDiv.style.color = "green";
        resultDiv.style.fontSize = "18px";
        resultDiv.style.fontWeight = "bold";

       
        const password = "techwizards";
        const newPageContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Next Round Password</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #74ebd5, #acb6e5);
                        margin: 0;
                    }
                    .header {
                        font-size: 24px;
                        font-weight: bold;
                        color: #fff;
                        margin-bottom: 20px;
                    }
                    .password-container {
                        background-color: #fff;
                        padding: 30px;
                        border-radius: 15px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                        text-align: center;
                        animation: fadeIn 1s ease-in-out;
                    }
                    .password {
                        font-size: 26px;
                        font-weight: bold;
                        color: #007bff;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }
                </style>
            </head>
            <body>
                <div class="header">SVCE ACM AND ACM-W</div>
                <div class="password-container">
                    <h1>🎉 Congratulations! 🎉</h1>
                    <p>Your password for the next round is:</p>
                    <p class="password">${password}</p>
                </div>
            </body>
            </html>
        `;

        
        const newWindow = window.open("", "_blank");
        newWindow.document.write(newPageContent);
        newWindow.document.close();
    } else {
        resultDiv.textContent = "❌ Incorrect! Please try again.";
        resultDiv.style.color = "red";
        resultDiv.style.fontSize = "18px";
        resultDiv.style.fontWeight = "bold";
    }
}
