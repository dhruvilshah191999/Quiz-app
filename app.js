const questions = [
  {
    id: "Javascript_Basic",
    name: "JavaScript Basics",
    questions: [
      {
        question: "What does console.log(typeof 'Hello') output?",
        options: ["string", "object", "undefined", "number"],
        answer: "string",
      },
      {
        question:
          "Which of the following is a valid variable name in JavaScript?",
        options: ["1stVariable", "my-variable", "myVariable", "my variable"],
        answer: "myVariable",
      },
      {
        question:
          "What will the following code output: console.log(0.1 + 0.2 === 0.3)?",
        options: ["true", "false", "NaN", "undefined"],
        answer: "false",
      },
      {
        question:
          "Which of the following methods can be used to convert a string to an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "What will the result of console.log(2 + '2') be?",
        options: ["4", "'22'", "22", "'4'"],
        answer: "'22'",
      },
      {
        question:
          "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["=", "==", "===", ":="],
        answer: "=",
      },
      {
        question: "What will typeof null return?",
        options: ["null", "object", "undefined", "NaN"],
        answer: "object",
      },
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Number", "Float", "Object"],
        answer: "Float",
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
          "function myFunction {}",
          "function:myFunction() {}",
          "function myFunction() {}",
          "create function myFunction() {}",
        ],
        answer: "function myFunction() {}",
      },
      {
        question: "What does the Array.isArray() method do?",
        options: [
          "Checks if a variable is an array",
          "Converts an array to a string",
          "Creates a new array",
          "Merges two arrays",
        ],
        answer: "Checks if a variable is an array",
      },
    ],
  },
  {
    id: "ReactJs_Advance",
    name: "React Advance",
    questions: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library",
          "A CSS framework",
          "A database",
          "A server-side language",
        ],
        answer: "A JavaScript library",
      },
      {
        question: "Which of the following is used to create a React app?",
        options: [
          "create-react-app",
          "react-create-app",
          "new-react-app",
          "app-react-create",
        ],
        answer: "create-react-app",
      },
      {
        question: "What is the main purpose of components in React?",
        options: ["Styling", "Managing state", "Reusability", "Routing"],
        answer: "Reusability",
      },
      {
        question:
          "Which method is used to update the state in a React component?",
        options: [
          "setState()",
          "updateState()",
          "changeState()",
          "modifyState()",
        ],
        answer: "setState()",
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML",
          "JavaScript eXtension",
          "JSON Syntax",
          "JavaScript Syntax",
        ],
        answer: "JavaScript XML",
      },
      {
        question: "What is the purpose of keys in React?",
        options: [
          "To identify elements",
          "To style components",
          "To manage state",
          "To handle events",
        ],
        answer: "To identify elements",
      },
      {
        question:
          "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useState",
      },
      {
        question: "What does the useEffect hook do?",
        options: [
          "Fetch data",
          "Manage state",
          "Handle events",
          "Perform side effects",
        ],
        answer: "Perform side effects",
      },
      {
        question: "What is a prop in React?",
        options: [
          "A state variable",
          "A component",
          "A property passed to components",
          "An event handler",
        ],
        answer: "A property passed to components",
      },
      {
        question:
          "Which of the following is NOT a lifecycle method in class components?",
        options: [
          "componentDidMount",
          "componentWillUnmount",
          "render",
          "componentComplete",
        ],
        answer: "componentComplete",
      },
    ],
  },
  {
    id: "Angular_Basic",
    name: "Angular Basics",
    questions: [
      {
        question: "What is Angular?",
        options: [
          "A programming language",
          "A JavaScript framework",
          "A database",
          "A CSS library",
        ],
        answer: "A JavaScript framework",
      },
      {
        question:
          "Which of the following is used to create an Angular application?",
        options: ["ng create", "ng new", "ng init", "ng start"],
        answer: "ng new",
      },
      {
        question: "What is the main purpose of Angular modules?",
        options: [
          "Styling components",
          "Organizing application functionality",
          "Routing",
          "Data storage",
        ],
        answer: "Organizing application functionality",
      },
      {
        question: "What is a component in Angular?",
        options: [
          "A service",
          "A directive",
          "A building block of the UI",
          "A module",
        ],
        answer: "A building block of the UI",
      },
      {
        question: "Which decorator is used to define a component?",
        options: ["@Component", "@Injectable", "@Directive", "@Module"],
        answer: "@Component",
      },
      {
        question: "What is two-way data binding in Angular?",
        options: [
          "Data flows one way",
          "Data flows both ways",
          "No data binding",
          "Data is static",
        ],
        answer: "Data flows both ways",
      },
      {
        question:
          "Which of the following is used for dependency injection in Angular?",
        options: ["@Inject", "@Service", "@Component", "@Module"],
        answer: "@Inject",
      },
      {
        question: "What is Angular CLI?",
        options: [
          "Command Line Interface for Angular",
          "Component Lifecycle Interface",
          "Common Language Interface",
          "Custom Library Interface",
        ],
        answer: "Command Line Interface for Angular",
      },
      {
        question: "What is a service in Angular?",
        options: [
          "A reusable piece of code",
          "A UI component",
          "A routing module",
          "A stylesheet",
        ],
        answer: "A reusable piece of code",
      },
      {
        question:
          "Which of the following is NOT a valid Angular lifecycle hook?",
        options: ["ngOnInit", "ngOnDestroy", "ngAfterViewInit", "ngOnComplete"],
        answer: "ngOnComplete",
      },
    ],
  },
  {
    id: "Flutter",
    name: "Flutter",
    questions: [
      {
        question: "What is Flutter?",
        options: [
          "A mobile app framework",
          "A programming language",
          "A web development tool",
          "A database",
        ],
        answer: "A mobile app framework",
      },
      {
        question: "Which programming language is primarily used with Flutter?",
        options: ["Java", "C++", "Dart", "JavaScript"],
        answer: "Dart",
      },
      {
        question: "What is a widget in Flutter?",
        options: [
          "A library",
          "A component of the UI",
          "A function",
          "A data structure",
        ],
        answer: "A component of the UI",
      },
      {
        question: "Which command is used to create a new Flutter project?",
        options: [
          "flutter new",
          "flutter create",
          "flutter init",
          "flutter start",
        ],
        answer: "flutter create",
      },
      {
        question: "What does the 'pubspec.yaml' file in Flutter do?",
        options: [
          "Manages dependencies",
          "Defines routes",
          "Contains assets",
          "Manages state",
        ],
        answer: "Manages dependencies",
      },
      {
        question: "What is the purpose of the 'build' method in a widget?",
        options: [
          "To render the widget",
          "To initialize state",
          "To handle events",
          "To manage navigation",
        ],
        answer: "To render the widget",
      },
      {
        question: "What does 'StatelessWidget' represent in Flutter?",
        options: [
          "A widget that can change state",
          "A widget that doesn't change state",
          "A widget that has animations",
          "A widget that manages routes",
        ],
        answer: "A widget that doesn't change state",
      },
      {
        question:
          "Which of the following is used for state management in Flutter?",
        options: [
          "Provider",
          "setState",
          "InheritedWidget",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the main function in a Flutter application?",
        options: ["main()", "runApp()", "init()", "startApp()"],
        answer: "main()",
      },
      {
        question: "Which widget is used to display a list of items in Flutter?",
        options: ["ListView", "Column", "Row", "Stack"],
        answer: "ListView",
      },
    ],
  },
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let totalQuestion = 0;
let timeValue = 10;
let counter;
let currentProgress = 0;

let userFilledValues = {
  name: "",
  topic: "",
};

const selectedOptionValues = [];

const startQuizElement = document.getElementById("start-quiz");
const progressBar = document.getElementById("progress");

function handleButtonDisabled() {
  if (userFilledValues?.name && userFilledValues?.topic) {
    startQuizElement.disabled = false;
  } else {
    startQuizElement.disabled = true;
  }
}

handleButtonDisabled();

function handleChange() {
  var inputValue = document.getElementById("fullname").value;
  userFilledValues = { ...userFilledValues, name: inputValue };

  handleButtonDisabled();
}

function removeActiveOptions() {
  document
    .getElementById("options_Javascript_Basic")
    .classList.remove("active");
  document.getElementById("options_Angular_Basic").classList.remove("active");
  document.getElementById("options_ReactJs_Advance").classList.remove("active");
  document.getElementById("options_Flutter").classList.remove("active");
}

function radioChanged(value) {
  removeActiveOptions();
  userFilledValues = { ...userFilledValues, topic: value };

  document.getElementById(`options_${value}`).classList.add("active");

  handleButtonDisabled();
}

function startQuiz() {
  selectedQuestions = questions.find(
    (q) => q.id === userFilledValues?.topic
  ).questions;
  document.getElementById("main-lading-page").style.display = "none";
  document.getElementById("exit-button").style.display = "flex";
  document.getElementById("quiz-started").style.display = "flex";

  currentQuestionIndex = 0;
  totalQuestion = selectedQuestions.length;

  startTimer();
  queCounter();
  showQuestion();
  increaseProgress();
}

function queCounter() {
  document.getElementById("count").innerHTML = `<span>${
    currentQuestionIndex + 1
  }</span> / ${totalQuestion}`;
}

function showQuestion() {
  const queElement = document.getElementById("question");
  queElement.innerHTML = selectedQuestions[currentQuestionIndex].question;
  const queIndexElement = document.getElementById("question_index");
  queIndexElement.innerHTML = currentQuestionIndex + 1;
  const options = selectedQuestions[currentQuestionIndex].options;
  const optElement = document.getElementById("options-list");

  let opt_tag = `<label id="${options[0]}" class="custom-radio">
            <div>
              <input
                type="radio"
                name="question-option"
                value="${options[0]}"
                onchange="optionSelected(this.value)"
              />
              <span class="checkmark"></span>
            </div>
            <p>${options[0]}</p>
          </label>
          <label id="${options[1]}" class="custom-radio">
            <div>
              <input
                type="radio"
                name="question-option"
                value="${options[1]}"
                onchange="optionSelected(this.value)"
              />
              <span class="checkmark"></span>
            </div>
            <p>${options[1]}</p>
          </label>
          <label id="${options[2]}" class="custom-radio">
            <div>
              <input
                type="radio"
                name="question-option"
                value="${options[2]}"
                onchange="optionSelected(this.value)"
              />
              <span class="checkmark"></span>
            </div>
            <p>${options[2]}</p>
          </label>
          <label id="${options[3]}" class="custom-radio">
            <div>
              <input
                type="radio"
                name="question-option"
                value="${options[3]}"
                onchange="optionSelected(this.value)"
              />
              <span class="checkmark"></span>
            </div>
            <p>${options[3]}</p>
          </label>`;

  optElement.innerHTML = opt_tag;
}

function optionSelected(value) {
  selectedOptionValues[currentQuestionIndex] = value;
}

function next() {
  if (!selectedOptionValues[currentQuestionIndex])
    selectedOptionValues[currentQuestionIndex] = "";

  if (currentQuestionIndex === 8) {
    const queElement = document.getElementById("next-question");
    queElement.textContent = "Finish";
  }

  if (currentQuestionIndex === 9) {
    clearInterval(counter);
    document.getElementById("quiz-started").style.display = "none";
    document.getElementById("result-section").style.display = "block";
    handleResult();
    return;
  }

  currentQuestionIndex = currentQuestionIndex + 1;
  clearInterval(counter);
  timeValue = 10;
  startTimer();
  queCounter();
  showQuestion();
  increaseProgress();
}

function startTimer() {
  const timeCount = document.getElementById("counter");
  timeCount.textContent = `0:${timeValue}`;
  counter = setInterval(timer, 1000);
  function timer() {
    timeValue--;
    if (timeValue <= 9) {
      timeCount.textContent = `0:0${timeValue}`;
    }
    if (timeValue < 1) {
      next();
    }
  }
}

function increaseProgress() {
  if (currentProgress < 100) {
    currentProgress = (100 / totalQuestion) * (currentQuestionIndex + 1);
    progressBar.style.width = currentProgress + "%";
  }
}

function exitQuiz() {
  document.getElementById("quiz-started").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  clearInterval(counter);
  handleResult();
}

function handleResult() {
  let trueQuestions = 0;
  let wrongQuestions = 0;
  let skipQuestions = 0;

  console.log(selectedOptionValues);

  selectedOptionValues.forEach((option, index) => {
    if (option) {
      if (selectedQuestions[index].answer === option) trueQuestions += 1;
      else wrongQuestions += 1;
    } else skipQuestions += 1;
  });

  document.getElementById(
    "result"
  ).textContent = `Correct: ${trueQuestions} Wrong: ${wrongQuestions} Skip: ${skipQuestions}`;
}
