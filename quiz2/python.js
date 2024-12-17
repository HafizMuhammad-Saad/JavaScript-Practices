const pythonQuestions = [
    {
        que: "What is Python primarily used for?",
        opt1: "Web Development",
        opt2: "Data Analysis",
        opt3: "Machine Learning",
        opt4: "All of the above",
        ans: "All of the above",
      },
      {
        que: "What is the correct extension for Python files?",
        opt1: ".py",
        opt2: ".python",
        opt3: ".pt",
        opt4: ".pyth",
        ans: ".py",
      },
      {
        que: "Which of the following is a Python framework?",
        opt1: "Django",
        opt2: "Laravel",
        opt3: "Spring",
        opt4: "Flask",
        ans: "Django",
      },
      {
        que: "Which keyword is used to define a function in Python?",
        opt1: "function",
        opt2: "define",
        opt3: "def",
        opt4: "func",
        ans: "def",
      },
    //   {
    //     que: "What does 'PEP' stand for in Python?",
    //     opt1: "Python Extended Programming",
    //     opt2: "Python Enhancement Proposal",
    //     opt3: "Programming Efficiently with Python",
    //     opt4: "Python Execution Protocol",
    //     ans: "Python Enhancement Proposal",
    //   },
    //   {
    //     que: "Which of the following is a mutable data type in Python?",
    //     opt1: "Tuple",
    //     opt2: "String",
    //     opt3: "List",
    //     opt4: "Float",
    //     ans: "List",
    //   },
    //   {
    //     que: "How do you create a virtual environment in Python?",
    //     opt1: "python -m venv env",
    //     opt2: "python create env",
    //     opt3: "python new environment",
    //     opt4: "python env start",
    //     ans: "python -m venv env",
    //   },
    //   {
    //     que: "Which of the following is used to handle exceptions in Python?",
    //     opt1: "try-catch",
    //     opt2: "try-except",
    //     opt3: "error-handler",
    //     opt4: "throw-catch",
    //     ans: "try-except",
    //   },
    //   {
    //     que: "What is the output of the following code?\n```python\nprint(type([1, 2, 3]))\n```",
    //     opt1: "<class 'list'>",
    //     opt2: "<class 'tuple'>",
    //     opt3: "<class 'set'>",
    //     opt4: "<class 'dict'>",
    //     ans: "<class 'list'>",
    //   },
    //   {
    //     que: "Which Python library is commonly used for Data Analysis?",
    //     opt1: "NumPy",
    //     opt2: "Pandas",
    //     opt3: "Matplotlib",
    //     opt4: "All of the above",
    //     ans: "All of the above",
    //   },
    //   {
    //     que: "What is the correct way to install Python packages?",
    //     opt1: "python get package",
    //     opt2: "pip install package-name",
    //     opt3: "python install package-name",
    //     opt4: "pip get package",
    //     ans: "pip install package-name",
    //   },
    //   {
    //     que: "How do you comment a single line in Python?",
    //     opt1: "//",
    //     opt2: "/*",
    //     opt3: "#",
    //     opt4: "*/",
    //     ans: "#",
    //   },
    //   {
    //     que: "What does the 'len()' function do in Python?",
    //     opt1: "Calculates the length of a string or collection",
    //     opt2: "Checks if an object is iterable",
    //     opt3: "Finds the largest value in a collection",
    //     opt4: "Returns the last element of a collection",
    //     ans: "Calculates the length of a string or collection",
    //   },
  ]


  var question1 = document.getElementById('question');

  var quizOpt = document.getElementsByName('quizOpt')

  var optText1 = document.getElementById('optText1');
  var optText2 = document.getElementById('optText2');
  var optText3 = document.getElementById('optText3');
  var optText4 = document.getElementById('optText4');

  var option1 = document.getElementById('option1');
  var option2 = document.getElementById('option2');
  var option3 = document.getElementById('option3');
  var option4 = document.getElementById('option4');

  var resultShow = document.getElementById("resultWindow");
  var quizShow = document.getElementById("quizWindow");
  var announcement = document.getElementById("announcement")
  var scoring = document.getElementById("scoring")

  var currQue = 0;
  var score = 0;
  function renderQuestionPython() {
    question1.innerHTML = pythonQuestions[currQue].que;
    optText1.innerHTML = pythonQuestions[currQue].opt1;
    optText2.innerHTML = pythonQuestions[currQue].opt2;
    optText3.innerHTML = pythonQuestions[currQue].opt3;
    optText4.innerHTML = pythonQuestions[currQue].opt4;

    option1.value = pythonQuestions[currQue].opt1;
    option2.value = pythonQuestions[currQue].opt2
    option3.value = pythonQuestions[currQue].opt3
    option4.value = pythonQuestions[currQue].opt4
    
    
    
  }


function next2() {
    var radioChecked = false
    for (var i = 0; i < quizOpt.length; i++) {
        if (quizOpt[i].checked) {
            radioChecked = true
            if (quizOpt[i].value === pythonQuestions[currQue].ans) {
                score++
            }
        } 

    }
    if (!radioChecked) {
        Swal.fire({
            title: "No option selected",
            text: "Please Select an Option",
            icon: "error"
          });
    } else {
        if (currQue < pythonQuestions.length - 1) {
            currQue++
            deSelect()
            renderQuestionPython()

        } else {
           displayResult()
        }
    }
    
}


function deSelect() {
    for (var i = 0; i < quizOpt.length; i++) {
        quizOpt[i].checked = false
}
}
  
function displayResult() {


    quizShow.style.display = 'none'
    resultShow.style.display = "block";

    var totalQ = document.getElementById('totalQuestions')
    var correctQ = document.getElementById('correctQuestions')
    var perc = document.getElementById('perc')
    var circle = document.getElementById('circle')

    var percents = Math.floor(score / pythonQuestions.length * 100)
    var result = "";
    if (percents < 70) {
        result = 'Better luck next time , You are Failed!'
        announcement.style.color = "red"
        circle.classList.remove("border-success");
        circle.classList.add('border-danger');
        perc.classList.remove('text-success');
        perc.classList.add('text-danger');
    } else {
        result = 'Congratulations You have successfully completed the challenge'
        announcement.style.color = "green"
    }
    announcement.innerHTML = result
    totalQ.innerHTML = pythonQuestions.length;
    correctQ.innerHTML = score;
    perc.innerHTML = percents;

    var resultQuiz = {
      score: score,
      totalQuestions: pythonQuestions.length,
      percents: percents,

    }
  
localStorage.setItem('resultPython', JSON.stringify(resultQuiz));

}



var resultStored = JSON.parse(localStorage.getItem('resultPython'))

if (resultStored) {
  quizShow.style.display = 'none'
  
  resultShow.style.display = "block";
  var totalQ = document.getElementById('totalQuestions')
  var correctQ = document.getElementById('correctQuestions')
  var perc = document.getElementById('perc')
  var circle = document.getElementById('circle')

  var percents = Math.floor(score / pythonQuestions.length * 100)
  var result = "";
  if (resultStored.percents < 70) {
      result = 'Better luck next time , You are Failed!'
      announcement.style.color = "red"
      circle.classList.remove("border-success");
      circle.classList.add('border-danger');
      perc.classList.remove('text-success');
      perc.classList.add('text-danger');
  } else {
      result = 'Congratulations You have successfully completed the challenge'
      announcement.style.color = "green/"
  }
  announcement.innerHTML = result
    totalQ.innerHTML = resultStored.totalQuestions;
    correctQ.innerHTML = resultStored.score;
    // scoring.innerHTML = `${resultStored.score} out of ${resultStored.totalQuestions} and your percentage is ${resultStored.percents} %`
    perc.innerHTML = resultStored.percents;
  
} else {
  window.onload = renderQuestionPython()

}


