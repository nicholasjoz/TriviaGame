var correctAnswers= ["b", "a", "c", "d", "a"];
var totalQ= 5;
var score=0;
var userChoice1= "";
var userChoice2= "";
var userChoice3= "";
var userChoice4= "";
var userChoice5= "";
var unanswered= 0;
var timeRemains=30;
var wrongAnswer= totalQ-score


// still cant get the radio buttons to clear when resettings game!!

//PSEUDOCODE/LAyout: Needed Functions
// radio button functionality to only allow 1 click at a time
// check for questions answered- for loop, run upon submission and when timer runs out
// check answers - compare to array of correct answers in for loop
// countdown interval function

// I will work on improving/cleaning this code with For loops. Just wanted to get
//it to a functional state for turn-in

$("#startButton").on("click", function (){
    clearGame();
    time= setInterval(countDown, 1000)
})

function clearGame (){
        $('#countingDown').empty();
        $('#congrats').empty();
        $('#correct').empty();
        $('#extra').empty();
        $('#unanswered').empty();
        $('input[name=q1]').prop('checked', false);
        $('input[name=q2]').prop('checked', false);
        $('input[name=q3]').prop('checked', false);
        $('input[name=q4]').prop('checked', false);
        $('input[name=q5]').prop('checked', false);
        unanswered = 0;
        score = 0;
        timeRemains=30
    }

function countDown(){
    timeRemains--;
    console.log(timeRemains);
    $("#countingDown").html('<h3> Countdown Timer (get to work slacker): <br>' +timeRemains + ' seconds </h3>');
    if (timeRemains <1){
        clearInterval(time);
        checkAnswers();
        outofTime();
        endGame();
    }
}

// !!! must figure out how to make the score function only trigger when all questions are filled in

//clear game function



function endGame(){
$("#congrats").text("Congrats on finishing the game!");
$("#correct").text("You answered " + score + " out of " + totalQ + " correctly!");
$("#incorrect").text("Which means you messed up " + (totalQ- score) + " time(s).");
$("#unanswered").text("You left " + unanswered + " question unanswered.");
if (score <=3) {
    $("#extra").text("Honestly, if this was a test you would have failed. That was pathetic.");
}
else if (score>3){
    $("#extra").text("Wow, you did great! You must be a hippie or something...");
}
}

function checkComplete(){
    if (!$("input[name*=q1]:checked").val() ||  
    !$("input[name*=q2]:checked").val() ||  
    !$("input[name*=q3]:checked").val() ||  
    !$("input[name*=q4]:checked").val() ||  
    !$("input[name*=q5]:checked").val()
    ) {
        alert("You're not done! Answer all questions before clicking this button! You probably should hurry. You dont have all that much time to complete this quiz, anyways... only 30 seconds. When you think about it, that's not really all that much time. You cant even brush your teeth properly in 30 seconds. I really hope you're not reading this whole message. That would be quite unfortunate. I mean, this quiz does determine your future. You dont want to end up in Hufflepuff do you? No, of course you dont. No one wants to end up in Hufflepuff.");
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
    clearInterval(time);
})





//function testSubmit(){
//$("#quizform input[type='radio']:checked").val();
//console.log();}


// testSubmit();