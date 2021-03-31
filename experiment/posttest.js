
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "Why is the rim type of flywheel used over the disc type of flywheel?",
      answers: {
        a: "Rim type has less weight compared to disc type of flywheel",
        b: "Rim type has more weight compared to disc type of flywheel",
        c: "Disc type of flywheel has more weight than rim type",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "The ratio of maximum fluctuation of speed to the mean speed is called",
      answers: {
        a: "Fluctuation of speed",
        b: "Maximum fluctuation of speed",
        c: "Coefficient of fluctuation of speed",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "The difference the maximum and minimum speeds during a cycle is called",
      answers: {
        a: "Fluctuation of speed",
        b: "Maximum fluctuation of speed",
        c: "Coefficient of fluctuation of speed",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "A flywheel connected to a punching machine has to supply energy of 160 Nm while running at a mean angular speed of 12rad/s. If the total fluctuation of speed is not exceeded to ±1.75%, the mass moment of inertia of the flywheel in kgm2 is",
      answers: {
        a: "56.25",
        b: "135.39",
        c: "31.75",
        d: "23.95"
      },
      correctAnswer: "c"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
