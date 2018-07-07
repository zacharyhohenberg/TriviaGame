$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = 
    questions: 
    ['What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?',
        ['Joker',
		 "Ra's Al Ghul",
		 'Bane',
		 'Killer Croc'],
    'What were the names of Bruce Wayne's parents?',
        ['Brad & Jenn',
		 'Thomas & Martha',
		 'Wayne & Alice',
		 'Michael & Keaton'],        
    'Who is credited with creating Batman?',
        ['Stan Lee',
		 'Bob Kane',
		 'Bruce Wayne',
		 'Jerry Siegel']       
    'What Batman villain formerly worked as a zoologist?',
        ['Manbat',
		 'Poison Ivy',
		 'The Penguin',
		 'Killer Croc'],     
    'The original Batgirl was related to what familiar Batman character?',
        ['Commissioner Gordon',
		 'Batwoman',
		 'Alfred',
		 'Robin'],        
    'Which of these Bat-villains was introduced first?',
        ['Catwoman',
		 'The Penguin',
		 'Mr. Freeze',
		 'The Riddler'],        
    'Who is Professor Jonathan Crane?',
        ['Bane',
		 'Mad Hatter',
		 'Scarecrow',
		 'Riddler'],       
    'What is the original Robin's secret identity?',
        ['Jason Todd',
		 'Dick Grayson',
		 'Dick Drake',
		 'Bruce Wayne'],        
    'Who was Batman's first love interest?',
        ['Dinah Lance',
		 'Kathy Kane',
		 'Vickie Vaughn',
		 'Julie Madison'],       
    'Where does Batman send his most twisted foes for rehabilitation?'],
		['Alcotraz',
		 'Arkham Asylum',
		 'San Quentin',
		 'Gotham Asylum']    		 						
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
	possibleAnswers : ['Joker',
				       "Ra's Al Ghul",
				       'Bane',
				       'Killer Croc'],
	flags : [false, false, true, false],
	answer : 'Bane'
};

var q2 = {
	question: "What were the names of Bruce Wayne's parents?",
	possibleAnswers: ['Brad & Jenn',
				      'Thomas & Martha',
				      'Wayne & Alice',
				      'Michael & Keaton'],
	flags : [false, true, false, false],
	answer : 'Thomas & Martha'
};

var q3 = {
	question : 'Who is credited with creating Batman?',
	possibleAnswers : ['Stan Lee',
				       'Bob Kane',
				       'Bruce Wayne',
				       'Jerry Siegel'],
	flags : [false, true, false, false],
	answer : 'Bob Kane'
};

var q4 = {
	question : 'What Batman villain formerly worked as a zoologist?',
	possibleAnswers : ['Manbat',
				       'Poison Ivy',
				       'The Penguin',
				       'Killer Croc'],
	flags : [true, false, false, false],
	answer : 'Manbat'
};

var q5 = {
	question : 'The original Batgirl was related to what familiar Batman character?',
	possibleAnswers : ['Commissioner Gordon',
				       'Batwoman',
				       'Alfred',
				       'Robin'],
	flags : [false, true, false, false],
	answer : 'Batwoman'
};

var q6 = {
	question : 'Which of these Bat-villains was introduced first?',
	possibleAnswers : ['Catwoman',
				       'The Penguin',
				       'Mr. Freeze',
				       'The Riddler'],
	flags : [true, false, false, false],
	answer : 'Catwoman'
};

var q7 = {
	question : 'Who is Professor Jonathan Crane?',
	possibleAnswers : ['Bane',
				       'Mad Hatter',
				       'Scarecrow',
				       'Riddler'],
	flags : [false, false, true, false],
	answer : 'Scarecrow'
};

var q8 = {
	question : "What is the original Robin's secret identity?",
	possibleAnswers : ['Jason Todd',
				       'Dick Grayson',
				       'Dick Drake',
				       'Bruce Wayne'],
	flags : [false, true, false, false],
	answer : 'Dick Grayson'
};

var q9 = {
	question : "Who was Batman's first love interest?",
	possibleAnswers : ['Dinah Lance',
				       'Kathy Kane',
				       'Vickie Vaughn',
				       'Julie Madison'],
	flags : [false, false, false, true],
	answer : 'Julie Madison'
};

var q10 = {
	question : 'Where does Batman send his most twisted foes for rehabilitation?',
	possibleAnswers : ['Alcotraz',
				       'Arkham Asylum',
				       'San Quentin',
				       'Gotham Asylum'],
	flags : [false, true, false, false],
	answer : 'Arkham Asylum'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("YOU ARE CORRECT!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("YOU ARE INCORRECT!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " RIGHT</p></h2>");
	$('.question').append("<h2><p>" + wrong + " WRONG</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});