const htmlQuestions = [
    {
      que: "What does HTML stand for?",
      opt1: "HyperText Markup Language",
      opt2: "HyperText Make Language",
      opt3: "How To Manage Language",
      opt4: "HighText Machine Language",
      ans: "HyperText Markup Language",
    },
    {
      que: "Which HTML tag is used to create a hyperlink?",
      opt1: "link",
      opt2: "a",
      opt3: "href",
      opt4: "anchor",
      ans: "a",
    },
    {
      que: "Which tag is used for inserting an image in HTML?",
      opt1: "img",
      opt2: "picture",
      opt3: "image",
      opt4: "src",
      ans: "img",
    },
    {
      que: "What is the correct way to specify a background color in HTML?",
      opt1: 'style="background-color:blue;"',
      opt2: 'bgcolor="blue"',
      opt3: 'color="blue"',
      opt4: 'background="blue"',
      ans: 'style="background-color:blue;"',
    },
    {
      que: "What is the purpose of the <head> tag in an HTML document?",
      opt1: "To define the visible content of the document",
      opt2: "To specify metadata and include links to stylesheets or scripts",
      opt3: "To create a header section on the webpage",
      opt4: "To add navigation links to the page",
      ans: "To specify metadata and include links to stylesheets or scripts",
    },
    // {
    //   que: "What is the correct HTML element for the largest heading?",
    //   opt1: "h1",
    //   opt2: "header",
    //   opt3: "heading",
    //   opt4: "h6",
    //   ans: "h1",
    // },
    // {
    //   que: "Which HTML tag is used to define an unordered list?",
    //   opt1: "ul",
    //   opt2: "ol",
    //   opt3: "li",
    //   opt4: "list",
    //   ans: "u",
    // },
    // {
    //   que: "What is the correct way to create a line break in HTML?",
    //   opt1: "lb",
    //   opt2: "br",
    //   opt3: "break",
    //   opt4: "newline",
    //   ans: "br",
    // },
    // {
    //   que: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    //   opt1: "alt",
    //   opt2: "src",
    //   opt3: "title",
    //   opt4: "longdesc",
    //   ans: "alt",
    // },
    // {
    //   que: "Which HTML element is used to define the title of a document?",
    //   opt1: "title",
    //   opt2: "header",
    //   opt3: "meta",                                     
    //   opt4: "head",
    //   ans: "title",
    // },
  ];

  
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
  var btnNext = document.getElementById('next');

  var resultShow = document.getElementById("resultWindow");
  var quizShow = document.getElementById("quizWindow");
  var announcement = document.getElementById("announcement")
  var scoring = document.getElementById("scoring")

  


  var currQue = 0;
  var score = 0;

  function renderQuestion() {
    question1.innerHTML = htmlQuestions[currQue].que;
    optText1.innerHTML = htmlQuestions[currQue].opt1;
    optText2.innerHTML = htmlQuestions[currQue].opt2;
    optText3.innerHTML = htmlQuestions[currQue].opt3;
    optText4.innerHTML = htmlQuestions[currQue].opt4;

    option1.value = htmlQuestions[currQue].opt1;
    option2.value = htmlQuestions[currQue].opt2
    option3.value = htmlQuestions[currQue].opt3
    option4.value = htmlQuestions[currQue].opt4
    
    
    
  }
  function next() {
    var radioChecked = false
    for (var i = 0; i < quizOpt.length; i++) {
        if (quizOpt[i].checked) {
            radioChecked = true
            if (quizOpt[i].value === htmlQuestions[currQue].ans) {
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
        if (currQue < htmlQuestions.length - 1) {
            currQue++
            deSelect()
            renderQuestion()

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

    var percents = Math.floor(score / htmlQuestions.length * 100)
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
        announcement.style.color = "green/"
    }
    announcement.innerHTML = result
    totalQ.innerHTML = htmlQuestions.length;
    correctQ.innerHTML = score;
    scoring.innerHTML = `${score} out of ${htmlQuestions.length} and your percentage is ${percents} %`
    perc.innerHTML = percents;

    var resultQuiz = {
      score: score,
      totalQuestions: htmlQuestions.length,
      percents: percents,

    }
  
localStorage.setItem('result', JSON.stringify(resultQuiz));

}

var resultStored = JSON.parse(localStorage.getItem('result'))

if (resultStored) {
  quizShow.style.display = 'none'
  
  resultShow.style.display = "block";
  var totalQ = document.getElementById('totalQuestions')
  var correctQ = document.getElementById('correctQuestions')
  var perc = document.getElementById('perc')
  var circle = document.getElementById('circle')

  var percents = Math.floor(score / htmlQuestions.length * 100)
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
    scoring.innerHTML = `${resultStored.score} out of ${resultStored.totalQuestions} and your percentage is ${resultStored.percents} %`
    perc.innerHTML = resultStored.percents;
  
} else {
  window.onload = renderQuestion()

}
