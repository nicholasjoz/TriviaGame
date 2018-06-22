var correctAnswers= ["b", "a", "c", "d", "a"];
var totalQ= 5;
var score=0;
var userChoice1= "";
var userChoice2= "";
var userChoice3= "";
var userChoice4= "";
var userChoice5= "";
var unanswered= 5;
var timeRemains=5;

//PSEUDOCODE/LAyout: Needed Functions
// radio button functionality to only allow 1 click at a time
// check for questions answered- for loop, run upon submission and when timer runs out
// check answers - compare to array of correct answers in for loop
// countdown interval function

// I will work on improving/cleaning this code with For loops. Just wanted to get
//it to a functional state for turn-in

$("#startButton").on("click", function (){
    time= setInterval(countDown, 1000)
})

function countDown(){
    timeRemains--;
    console.log(timeRemains);
    $("#countingDown").html('<h3> Time Remaining: ' +timeRemains + ' seconds </h3>');
    if (timeRemains <1){
        clearInterval(time);
        checkAnswers();
        endGame();
        outofTime();

    }
}

// must figure out how to stop timer at 0





function endGame(){
$("#congrats").text("Congrats on finishing the game!");
$("#correct").text("You answered " + score + " out of " + totalQ + " correctly!");
$("#unanswered").text("You left " + unanswered + " unanswered questions.");
}

function checkComplete(){
    if (!$("input[name*=q1]:checked").val() ||  
    !$("input[name*=q2]:checked").val() ||  
    !$("input[name*=q3]:checked").val() ||  
    !$("input[name*=q4]:checked").val() ||  
    !$("input[name*=q5]:checked").val()
    ) {
        alert("You're not done!");
    }
}

function checkAnswers(){
    if  ($("input[name*=q1]:checked").val() === "b") {
        score++;
    } 
    if ($("input[name*=q2]:checked").val() === "a") {
        score++;
    } 
    if ($("input[name*=q3]:checked").val() === "c") {
        score++;
    } 

    if ($("input[name*=q4]:checked").val() === "d") {
        score++;
    } 
    if ($("input[name*=q5]:checked").val() === "a") {
        score++;
    } 

}

function outofTime(){
        if (!$("input[name*=q1]:checked").val()) {
            unanswered++;
        }
        if (!$("input[name*=q2]:checked").val()) {
            unanswered++;
        }
        if (!$("input[name*=q3]:checked").val()) {
            unanswered++;
        }
        if (!$("input[name*=q4]:checked").val()) {
            unanswered++;
        }
        if (!$("input[name*=q5]:checked").val()) {
            unanswered++;
        }

    }



$("#submitButton").on("click", function() {
    checkComplete();
    checkAnswers();
    endGame();
})





//function testSubmit(){
//$("#quizform input[type='radio']:checked").val();
//console.log();}


// testSubmit();