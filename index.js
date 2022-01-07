    const fetchNumberData = async () =>  {
        const number = getInput();
        const response = await axios.get(`http://numbersapi.com/${number}`, {
        });
        const mathResponse = await axios.get(`http://numbersapi.com/${number}/math`, {
        });
        setTrivia(response.data);
        setMath(mathResponse.data);
    };

    const fetchRandomData = async () =>  {
        const number = fetchRandomNumber();
        setRandomNumber(number);
        const response = await axios.get(`http://numbersapi.com/${number}`, {
        });
        const mathResponse = await axios.get(`http://numbersapi.com/${number}/math`, {
        });
        setTrivia(response.data);
        setMath(mathResponse.data);
    };

    const fetchNextMathData = async () =>  {
        const number = getInput();
        const NextMathData = await axios.get(`http://numbersapi.com/${number}/math`, {
        });
        setMath(NextMathData.data);
    }
    
    const fetchNextTriviaData = async () =>  {
        const number = getInput();
        const NextTriviaData = await axios.get(`http://numbersapi.com/${number}`, {
        });
        setTrivia(NextTriviaData.data);
    }

    const searchButton = document.querySelector("#findFact");
    const randomButton = document.querySelector("#randomNumber");
    const mathNextButton = document.querySelector("#nextMath");
    const triviaNextButton = document.querySelector("#nextTrivia");

    window.addEventListener("load", fetchRandomData);
    randomButton.addEventListener("click", fetchRandomData);
    searchButton.addEventListener("click", fetchNumberData);
    mathNextButton.addEventListener("click", fetchNextMathData);
    triviaNextButton.addEventListener("click", fetchNextTriviaData);
