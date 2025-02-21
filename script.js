let totalGames = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function getRandomJoke() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const randomIndex = array[0] % jokes.length;
    return jokes[randomIndex];
}

const jokes = [
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

const moveDict = { 0: "Stone", 1: "Paper", 2: "Scissor" };


function updateScoreboard() {
    document.getElementById("total-games").textContent = totalGames;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("draws").textContent = draws;
}


function playRound(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    totalGames++;

    let resultMessage = `You chose <strong>${moveDict[userChoice]}</strong>.<br>
                       Computer chose <strong>${moveDict[computerChoice]}</strong>.<br>`;


    if (userChoice === computerChoice) {
        draws++;
        resultMessage += `<span class="draw">It's a draw! Both chose ${moveDict[userChoice]}.</span>`;
    } else if (
        (userChoice === 0 && computerChoice === 1) ||
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 0)
    ) {
        losses++;
        resultMessage += `<span class="lose">Computer won!</span>`;
    } else if (
        (userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)
    ) {
        wins++;
        resultMessage += `<span class="win">'CONGRATULATIONS' You won!</span>`;
    } else {
        resultMessage += "Unexpected error.";
    }


    updateScoreboard();


    document.getElementById("result-area").innerHTML = resultMessage;
}

function quitGame() {
    const joke = getRandomJoke();


    document.getElementById("result-area").innerHTML = `<p>Have a good day.....</p><p>${joke}</p>`;

    document.getElementById("stone-btn").disabled = true;
    document.getElementById("paper-btn").disabled = true;
    document.getElementById("scissor-btn").disabled = true;
    document.getElementById("game-quit-btn").disabled = true;
}


document.getElementById("start-btn").addEventListener("click", function () {

    document.getElementById("landing-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
});

document.getElementById("landing-quit-btn").addEventListener("click", function () {

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("landing-screen").innerHTML = `<h1>Have a good day.....</h1><p>${joke}</p>`;
});
