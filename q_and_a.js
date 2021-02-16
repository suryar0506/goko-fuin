var student_1_score = 0;
var student_2_score = 0;
var student1name = localStorage.getItem("Student 1");
var student2name = localStorage.getItem("Student 2");
function getInitialValues(){
document.getElementById("quiz_taker_2").innerHTML = "<h2>" + student2name + " : " + "</h2>";
document.getElementById("quiz_taker_1").innerHTML = "<h2>" + student1name + " : " + "</h2>";

document.getElementById("quizzer_1_score").innerHTML = "<h2>" +  student_1_score + "<h2>";
document.getElementById("quizzer_2_score").innerHTML ="<h2>" +  student_2_score + "<h2>";

document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + student1name + "</h2>";
document.getElementById("answer_turn").innerHTML = "<h2>" + "Answer Turn : " + student2name + "</h2>";
}

function send(){
numeroUno = document.getElementById("number1_text_input").value;
numeroDos = document.getElementById("number2_text_input").value;
product = parseInt(numeroUno) * parseInt(numeroDos);

var question_display = "<h4>" + numeroUno + " X " + numeroDos + "</h4>";
var answer_input = "<br> Answer : <input type = 'text' id = 'input_answer_box'>";
var check_button = "<br><br><button onclick = 'check()' class = 'btn btn-success'>Check</button>";
var complete_puzzle = question_display + answer_input + check_button;
document.getElementById("output").innerHTML = complete_puzzle;

document.getElementById("number1_text_input").value = null;
document.getElementById("number2_text_input").value = null;

}
var question_turn = "Student 1";
var answer_turn = "Student 2";
function check(){
student_answer = document.getElementById("input_answer_box").value;
if (student_answer == product){
    if(answer_turn = "Student 1"){
student_1_score = student_1_score + 1;
console.log(student_1_score);
document.getElementById("quizzer_1_score").innerHTML ="<h3>" + student_1_score  + "</h3>";
    } else {
student_2_score = student_2_score + 1;
console.log(student_2_score);
document.getElementById("quizzer_2_score").innerHTML ="<h3>" + student_2_score  + "</h3>";
    }
}

if (question_turn = "Student 1"){
    question_turn = "Student 2";
    document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + student2name + "</h2>";
} else {
    question_turn = "Student 1";
    document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + student1name + "</h2>";
}

if (answer_turn = "Student 1"){
    answer_turn = "Student 2";
    document.getElementById("answer_turn").innerHTML = "<h2>" + "Answer Turn : " + student2name + "</h2>";
} else {
    answer_turn = "Student 1";
    document.getElementById("answer_turn").innerHTML = "<h2>" + "Answer Turn : " + student1name + "</h2>";
}
document.getElementById("output").innerHTML = "";
}
