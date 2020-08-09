var score = 0
var ans0 = ('Your awnser is wrong');
var ans1 = ('Your awnser is right');
document.getElementById("totel_result").innerHTML = "Totel score ="+"10/"+score;

function check(){
    var right_awnser_1 = document.getElementById('q1-a1');
    var q1_awnser_2 = document.getElementById('q1-a1');
    var q1_awnser_3 = document.getElementById('q1-a1');
    var q1_awnser_4 = document.getElementById('q1-a1');
    document.getElementById("ans1").innerHTML = ans0;
    document.getElementById("q1-a1").disabled = true;
    document.getElementById("q1-a1").disabled = true;
    document.getElementById("q1-a2").disabled = true;
    document.getElementById("q1-a2").disabled = true;
    document.getElementById("q1-a3").disabled = true;
    document.getElementById("q1-a3").disabled = true;
    document.getElementById("q1-a4").disabled = true;
    document.getElementById("q1-a4").disabled = true;
}
function awnser(){
    var right_awnser_1 = document.getElementById('q1-a1');
    var q1_awnser_2 = document.getElementById('q1-a1');
    var q1_awnser_3 = document.getElementById('q1-a1');
    var q1_awnser_4 = document.getElementById('q1-a1');
    document.getElementById("ans1").innerHTML = ans1;
    score++
    document.getElementById("totel_result").innerHTML = "Totel score ="+"10/"+score;
    document.getElementById("q1-a1").disabled = true;
    document.getElementById("q1-a1").disabled = true;
    document.getElementById("q1-a2").disabled = true;
    document.getElementById("q1-a2").disabled = true;
    document.getElementById("q1-a3").disabled = true;
    document.getElementById("q1-a3").disabled = true;
    document.getElementById("q1-a4").disabled = true;
    document.getElementById("q1-a4").disabled = true;
}
