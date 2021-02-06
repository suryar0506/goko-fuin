function addStudent(){
    var student1 = document.getElementById("student1_input").value;
    var student2 = document.getElementById("student2_input").value;
    localStorage.setItem("Student 1",student1);
    localStorage.setItem("Student 2", student2);
    window.location = "q_and_a.html";
}