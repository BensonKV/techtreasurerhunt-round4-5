


const encodedParts1 = [
    "VEVDSF", "RSUFTV", "VJFSEV", "OVHthdG", "Jhc2hfY", "3JhY2tfOT", "I1MzM2Njd9"
];


const encodedPartsF1 = [
    "U1BSWF", "U2ltcGxl", "RkFLRV9Q", "YXJ0Mw==", "UmFuZG9tVGV4dA==", "TnVtYmVy", "TVNIX3BvY2tldA=="
];
const encodedParts = [
    "VEVD", "SFRS", "RUFTVV", "JFUkhVT", "lRJT", "kRJQU4="
];

const encodedParts2 = [
    "Tk9JU0U=", "U2FtcGxl", "UElFQ0U=", "dmFsdWU=", "Q2hhbGxlbmdl", "QWxsU3RyaW5n", "c29sdXRpb24="
];

const encodedPartse3 = [
    "VHJpYWw=", "VG9QZXJwbGV4", "QW5vdGhlcg==", "U2VjcmV0Q29kZQ==", "U0FNUExFX0RFQ09ERQ==", "WmFwcGVk", "U3RyaW5n"
];

function Noise() {
    let dummyArray = [Math.random(), Math.random(), Math.random()];
    dummyArray.forEach((val, index) => {
        console.log(`Noise value ${index}:`, val); 
    });
    return dummyArray.reduce((a, b) => a + b, 0);
}

function combineParts(parts) {
    let combined = "";
    for (let i = 0; i < parts.length; i++) {
        combined += parts[i];
    }
    return combined;
}


function complex(input) {
    let fakeResult = input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 2)).join('');
    console.log("Fake obfuscation result:", fakeResult);
    return fakeResult;
}

function Decision() {
    let flag = Math.random() > 0.5 ? "Path A" : "Path B";
    if (flag === "Path A") {
        console.log("Taking Path A");
    } else {
        console.log("Taking Path B");
    }
    return flag;
}


function Calculation(a, b) {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        result += (a * b * i) % (Math.random() * 100);
    }
    return result;
}

function nestedFunction() {
    for (let i = 0; i < 3; i++) {
        (function () {
            let temp = Math.sin(i * Math.PI / 180) * 100;
            console.log("Nested noise value:", temp);
        })();
    }
}


function decodeAnswer(encoded) {
    Noise(); 
    complex(encoded); 
    Decision(); 
    nestedFunction(); 
    return atob(encoded);
}

function checkInput() {
    const correctAnswer = decodeAnswer(combineParts(encodedParts)); 
    const userInput = document.getElementById("userInput").value;
    const resultDiv = document.getElementById("result");

    
    if (userInput.trim().length % 2 === 0 && Calculation(5, 10) < 100 && userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Correct! Redirecting...";
        resultDiv.style.color = "green";

        setTimeout(() => {
            window.location.href = "../techtreasurereasy3/begin3.html";
        }, 2000);
    } else {
        resultDiv.textContent = "Incorrect! Please try again.";
        resultDiv.style.color = "red";
    }
}


(function () {
    for (let i = 0; i < 2; i++) {
        fakeCalculation(i, Math.random() * 100);
    }
})();

generateNoise(); 
nestedNoiseFunction();
randomDecision();


function checkInput() {
    const correctAnswer = decodeAnswer(combineParts(encodedParts));
    const userInput = document.getElementById("userInput").value; 
    const resultDiv = document.getElementById("result");

    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Correct! Redirecting...";
        resultDiv.style.color = "green";
        
        setTimeout(() => {
            window.location.href = "../techtreasurereasy3/begin3.html"; 
        }, 2000); 
    } else {
        resultDiv.textContent = "Incorrect! Please try again.";
        resultDiv.style.color = "red";
    }
}