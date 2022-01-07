const fetchRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}

const setRandomNumber = (ran) => {
    const userInput = document.querySelector("#inputNumber");
    userInput.value = ran;
}

const getInput = () => {
    const userInput = document.querySelector("#inputNumber");
    return userInput.value
}

const setTrivia = (data) => {
    const triviaContent = document.querySelector("#triviaFact");
    triviaContent.textContent = data;
}

const setMath = (data) => {
    const mathContent = document.querySelector("#mathFact");
    mathContent.textContent = data;
}
