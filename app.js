var questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "answers": [
            "<script>",
            "<scripting>",
            "<js>",
            "<javascript>"
        ],
        "correctAnswer": "<script>"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        "answers": [
            'document.getElementById("demo").innerHTML = "Hello World!";',
            'document.getElement("p").innerHTML = "Hello World!";',
            'document.getElementByName("p").innerHTML = "Hello World!";',
            '#demo.innerHTML = "Hello World!";'
        ],
        "correctAnswer": 'document.getElementById("demo").innerHTML = "Hello World!";'
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "answers": [
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
            "The <body> section"
        ],
        "correctAnswer": "Both the <head> section and the <body> section are correct"
    },
    {
        "question": 'What is the correct syntax for referring to an external script called "xxx.js"?',
        "answers": [
            '<script src="xxx.js">',
            '<script href="xxx.js">',
            '<script name="xxx.js">'
        ],
        "correctAnswer": '<script src="xxx.js">'
    },
    {
        "question": 'The external JavaScript file must contain the <script> tag.',
        "answers": [
            'True',
            'False',
        ],
        "correctAnswer": 'False'
    },
    {
        "question": 'How do you write "Hello World" in an alert box?',
        "answers": [
            'alert("Hello World");',
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");'
        ],
        "correctAnswer": 'alert("Hello World");'
    },
    {
        "question": 'How do you create a function in JavaScript?',
        "answers": [
            'function myFunction()',
            'function = myFunction()',
            'function:myFunction()'
        ],
        "correctAnswer": 'function myFunction()'
    },
    {
        "question": 'How do you call a function named "myFunction"?',
        "answers": [
            'myFunction()',
            'call myFunction()',
            'call function myFunction()'
        ],
        "correctAnswer": 'myFunction()'
    },
    {
        "question": 'How to write an IF statement in JavaScript?',
        "answers": [
            'if i == 5 then',
            'if i = 5',
            'if (i == 5)',
            'if i = 5 then'
        ],
        "correctAnswer": 'if (i == 5)'
    },
    {
        "question": 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        "answers": [
            'if i =! 5 then',
            'if (i <> 5)',
            'if (i != 5)',
            'if i <> 5'
        ],
        "correctAnswer": 'if (i != 5)'
    },
    {
        "question": 'How does a WHILE loop start?',
        "answers": [
            'while i = 1 to 10',
            'while (i <= 10; i++)',
            'while (i <= 10)',
        ],
        "correctAnswer": 'while (i <= 10)'
    },
    {
        "question": 'How does a FOR loop start?',
        "answers": [
            'for (i = 0; i <= 5)',
            'for (i = 0; i <= 5; i++)',
            'for (i <= 5; i++)',
            'for i = 1 to 5'
        ],
        "correctAnswer": 'for (i = 0; i <= 5; i++)'
    },
    {
        "question": 'How can you add a comment in a JavaScript?',
        "answers": [
            "'This is a comment",
            '<!--This is a comment-->',
            '//This is a comment'
        ],
        "correctAnswer": '//This is a comment'
    },
    {
        "question": 'How to insert a comment that has more than one line?',
        "answers": [
            '<!--This comment has more than one line-->',
            '/*This comment has more than one line*/',
            '//This comment has more than one line//'
        ],
        "correctAnswer": '/*This comment has more than one line*/'
    },
    {
        "question": 'What is the correct way to write a JavaScript array?',
        "answers": [
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = "red", "green", "blue"',
            'var colors = ["red", "green", "blue"]'
        ],
        "correctAnswer": 'var colors = ["red", "green", "blue"]'
    },
    {
        "question": 'How do you round the number 7.25, to the nearest integer?',
        "answers": [
            'round(7.25)',
            'Math.round(7.25)',
            'rnd(7.25)',
            'Math.rnd(7.25)'
        ],
        "correctAnswer": 'Math.round(7.25)'
    },
    {
        "question": 'How do you find the number with the highest value of x and y?',
        "answers": [
            'Math.ceil(x, y)',
            'Math.max(x, y)',
            'ceil(x, y)',
            'top(x, y)'
        ],
        "correctAnswer": 'Math.max(x, y)'
    },
    {
        "question": 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        "answers": [
            'w2 = window.new("http://www.w3schools.com");',
            'w2 = window.open("http://www.w3schools.com");'
        ],
        "correctAnswer": 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        "question": 'JavaScript is the same as Java.',
        "answers": [
            'False',
            'True'
        ],
        "correctAnswer": 'False'
    },
    {
        "question": "How can you detect the client's browser name?",
        "answers": [
            'client.navName',
            'navigator.appName',
            'browser.name'
        ],
        "correctAnswer": 'navigator.appName'
    },
    {
        "question": 'Which event occurs when the user clicks on an HTML element?',
        "answers": [
            'onmouseclick',
            'onchange',
            'onmouseover',
            'onclick'
        ],
        "correctAnswer": 'onclick'
    },
    {
        "question": 'How do you declare a JavaScript variable?',
        "answers": [
            'v carName;',
            'variable carName;',
            'var carName;'
        ],
        "correctAnswer": 'var carName;'
    },
    {
        "question": 'Which operator is used to assign a value to a variable?',
        "answers": [
            '-',
            'x',
            '*',
            '='
        ],
        "correctAnswer": '='
    },
    {
        "question": 'What will the following code return: Boolean(10 > 9)',
        "answers": [
            'false',
            'true',
            'NaN'
        ],
        "correctAnswer": 'true'
    },
    {
        "question": 'Is JavaScript case-sensitive?',
        "answers": [
            'Yes',
            'No',
            '!= No'
        ],
        "correctAnswer": 'Yes'
    }
];

var answerofcurrent;

var questionContainer = document.getElementById("questionContainer");
var answerContainer = document.getElementById("answerContainer");
var resultDiv = document.getElementById("resultDiv");
var currentQuestionIndex = 0;
let marks = 0;

function displayQuestion(index) {
    if (currentQuestionIndex < questions.length) {
        answerContainer.innerHTML = "";
        questionContainer.innerHTML = "";
        var questionObject = questions[index];
        var questionText = questionObject.question;
        questionContainer.innerText = `Question ${index + 1}: ${questionText}`;
        displayAnswers(questionObject.answers, questionObject.correctAnswer, currentQuestionIndex);
        currentQuestionIndex++
    } else {
        questionContainer.style.display = "none";
        answerContainer.innerHTML = "";
        result(marks);
    };
}

function displayAnswers(options, correctAnswer, currentQuestionIndex) {
    if (currentQuestionIndex < questions.length) {
        options.forEach(element => {
            var answerbtn = document.createElement("button");
            answerbtn.setAttribute("class", "btn btn-secondary mt-4 answerBtn");
            answerbtn.setAttribute("onclick", `checkAnswer('${element}', '${correctAnswer}')`)
            answerbtn.innerText = element;
            answerContainer.appendChild(answerbtn);
        });
    }
};

function checkAnswer(clickedValue, correctAnswer) {
    answerofcurrent = clickedValue;
    if (answerofcurrent == correctAnswer) {
        marks++;
    };

    displayQuestion(currentQuestionIndex);
};

function result(marks) {
    resultDiv.innerHTML = `<h2>Result</h2>
    <p>Your scored ${marks} out of ${questions.length}</p>
    `
}
displayQuestion(currentQuestionIndex);