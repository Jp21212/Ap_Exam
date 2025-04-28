// The list that stores 20 questions, the question options, and the correct answer
const questionslist = [
    { question: "In a website browser bar, what does WWW stand for?", answers: ["Wishing Wealth Website", "World Wide Web", "Water Wave West", "Wellbeing Worldly Wise"], correct: "World Wide Web" },
    { question: "What is the capital of Florida?", answers: ["Miami", "Tallahassee", "Key West", "Jacksonville"], correct: "Tallahassee" },
    { question: "What is the capital of New York?", answers: ["Manhattan", "Bronx", "Long Island", "Albany"], correct: "Albany" },
    { question: "The original Amazon company sold what?", answers: ["Books", "Movies", "Phones and iPads", "Sport items"], correct: "Books" },
    { question: "In what year was the internet opened to the public?", answers: ["1987", "1993", "1980", "1989"], correct: "1993" },
    { question: "What is the human body is heaviest organ?", answers: ["Brain", "Heart", "Lungs", "Skin"], correct: "Skin" },
    { question: "When is National Ice Cream Month?", answers: ["July", "June", "August", "May"], correct: "July" },
    { question: "Who is Walt Disney is favorite princess?", answers: ["Snow White", "Ariel", "Cinderella", "Jasmine"], correct: "Cinderella" },
    { question: "Who won the first season of American Idol?", answers: ["Mac Miller", "Kelly Clarkson", "Snoop Dogg", "Taylor Swift"], correct: "Kelly Clarkson" },
    { question: "What is the largest mammal in the world?", answers: ["Blue Whale", "Great White Shark", "Python", "Monkey"], correct: "Blue Whale" },
    { question: "What is the main ingredient in a sushi dish?", answers: ["Crab", "Avocado", "Seaweed", "Rice"], correct: "Rice" },
    { question: "How many wives did King Henry VIII have?", answers: ["5", "9", "6", "2"], correct: "6" },
    { question: "Who is the Greek God of War, and son of Zeus and Hera?", answers: ["Ares", "Hades", "Apollo", "Hermes"], correct: "Ares" },
    { question: "What is the chemical symbol of Mercury?", answers: ["Au", "Hg", "Ag", "Mo"], correct: "Hg" },
    { question: "What is the official animal of Scotland?", answers: ["Cow", "Horse", "Pig", "Unicorn"], correct: "Unicorn" },
    { question: "What mountain range is the longest in the world?", answers: ["The Rockies", "Alps", "K2", "Andes"], correct: "Andes" },
    { question: "In which year did the Titanic sink?", answers: ["1910", "1911", "1912", "1913"], correct: "1912" },
    { question: "What is the name of Mickey Mouse dog?", answers: ["Pluto", "Scout", "Minnie", "Goofy"], correct: "Pluto" },
    { question: "What year was the very first model of the iPhone made?", answers: ["2007", "2006", "2005", "2004"], correct: "2007" },
    { question: "What programming language is often used for developing Android applications?", answers: ["Python", "Java", "HTML", "PHP"], correct: "Java" }
];

// Variables to track the current question index and the player's score
let currentQuestionIndex = 0;
let score = 0;

// This function checks if the selected answer matches the correct answer
function isCorrectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        return true;
    } else {
        return false;
    }
}

// This function loads the current question and its answer choices
function loadQuestion() {
    clearAnswers();

    let currentQuestion = questionsList[currentQuestionIndex];

    let questionElement = document.getElementById('question');
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        let answerText = currentQuestion.answers[i];
        let button = document.createElement('button');
        button.textContent = answerText;
        button.onclick = function() {
            chooseAnswer(answerText);
        };

        let answerButtons = document.getElementById('answer-buttons');
        answerButtons.appendChild(button);
    }
}

// This function clears the previous answers
function clearAnswers() {
    let answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
}

// This function handles when a user clicks on an answer
function chooseAnswer(selectedAnswer) {
    let correctAnswer = questionsList[currentQuestionIndex].correct;
    let resultElement = document.getElementById('result');

    if (isCorrectAnswer(selectedAnswer, correctAnswer)) {
        score = score + 1;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong! The correct answer was: " + correctAnswer;
    }

    let nextButton = document.getElementById('next-button');
    nextButton.style.display = 'inline-block';
}

// This function moves to the next question or ends the game
function nextQuestion() {
    currentQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < questionsList.length) {
        loadQuestion();
        document.getElementById('result').textContent = '';
        let nextButton = document.getElementById('next-button');
        nextButton.style.display = 'none';
    } else {
        endGame();
    }
}

// This function ends the game and shows the final score
function endGame() {
    let questionContainer = document.getElementById('question-container');
    questionContainer.style.display = 'none';

    let resultElement = document.getElementById('result');
    resultElement.style.display = 'none';

    let nextButton = document.getElementById('next-button');
    nextButton.style.display = 'none';

    let endContainer = document.getElementById('end-container');
    endContainer.style.display = 'block';

    let finalScore = document.getElementById('final-score');
    finalScore.textContent = "You scored " + score + " out of " + questionsList.length + ".";
}

// Event listener for the Next button
let nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', nextQuestion);

// Start the game by loading the first question
loadQuestion();