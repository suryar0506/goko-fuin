function getStudents(){
var student1name = localStorage.getItem("Student 1");
var student2name = localStorage.getItem("Student 2");
document.getElementById("quiz_taker_2").innerHTML = "<h2>" + student2name + " :" + "</h2>";
document.getElementById("quiz_taker_1").innerHTML = "<h2>" + student1name + " :" + "</h2>";
}

function send(){

}