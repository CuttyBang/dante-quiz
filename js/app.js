$(document).ready(function(){
	$('#ques').hide();
	$('#ans').hide();
	$("#select").hide();
	$('#next').hide();
	$('#final').hide();


	var questions = [{
		ques:"Who was Dante's muse?",
		choice: ["Barbara", "Francesca", "Beatrice", "Mariana" ],
		num: 0,
		ans: 2,
		response: "Correct! Dante wrote his most well known works with her as the subject. Dante's style gave his muse divine reverence, wherein Beatrice was basically Mary on earth. The paradigm of womanly perfection in medieval Italy."
	    },
	    {
		ques:"What is the name of Dante's treatsie on the vernacular called?",
		choice: ["La Commidia", "Convivio", "La Vita Nuova", "De Vulgari Eloquentia"],
		num: 1,
		ans: 3,
		response: "Correct! Dante felt that the vernacular (What the Italian language was called.) was a superior language over Latin, because the vernacular was a living, changing language, where Latin was dead and only spoken by the high class and the educated. He wrote this (incomplete) work to make his point."
	    },
		{
		ques:"From what Italian city did Dante hail from?",
		choice: ["Verona", "Firenze", "Roma", "Vinci"],
		num: 2,
		ans: 1,
		response: "Correct! Firenze was where Dante spent most of his life before he was exiled. His exile also played a part in how his most famous work, La Commidia, was written. Many of his former friends found a place in the Inferno."
		},
		{
		ques:"How many circles did Dante determine the Inferno to have?",
		choice: ["Nine", "Twelve", "Three", "Six"],
		num: 3,
		ans: 0,
		response: "Dante gave the Inferno, or Hell, 9 concentric circles. Each circle was responsible for the punishment of the sinners, and each punishment cleverly fit the sin. The bottom of the pit was a frozen lake of Satan's tears called the Cocytus."
		},
		{
		ques:"In the book Inferno, who did Dante put in the Beast's central mouth?",
		choice: ["Brutus", "Pope Boniface", "Judas Iscariot", "Cassius"],
		num: 4,
		ans: 2,
		response: "The Commidia was as much a political statement as it was a work of poetic art. Dante felt that Betyrayal was the greatest of all the sins (Dante was betrayed by his fellow Florntines, leading to his exile), so that sin was saved for the deepest circle of Hell. Judas betrayed Christ, so his punishment was metted out by Satan himself."
		}
	];

	var ask = 0;
	var right = 0;




	function gameStart(){
		if (ask < 5){
			$('#intro').hide();
			$('#ques').text(questions[ask].ques)
			$('#ques').fadeIn(500);
			$('#a').text(questions[ask].choice[0]);
			$('#b').text(questions[ask].choice[1]);
			$('#c').text(questions[ask].choice[2]);
			$('#d').text(questions[ask].choice[3]);
			$("#select").fadeIn(500);
			$('#submit').show();
			$('#final').hide();
			};
		if (ask === 5){
			$('#ques').hide();
			$('#ans').hide();
			$('#select').hide();
			$('#results').text("Well done! You got " + right + " out of " + ask + " questions right!");
			$('#final').show();
			$('#next').show();
			};
		if (ask === 5 && right < 4){
			$('#ques').hide();
			$('#ans').hide();
			$('#select').hide();
			$('#results').text("You got " + right + " out of " + ask + " questions right. Not bad.");
			$('#final').show();
			$('#next').show();
			};
		if (ask === 5 && right === 0){
			$('#ques').hide();
			$('#ans').hide();
			$('#select').hide();
			$('#results').text("You got " + right + " out of " + ask + " questions right. Better luck next time");
			$('#final').show();
			$('#next').show();
			};
		};

	function nextQuestion(){
		$('input[name=option]').attr('checked',false);
		gameStart();
	};

	function compare(){
		var answer= $("input[name='option']:checked").val();
		if (answer == questions[ask].ans){
			right++;
			$('#ans').text(questions[ask].response);
			$('#select').hide();
			$('#ques').hide();
			$('#ans').show();
			setTimeout(function(){
				$('#ans').hide();
				nextQuestion();
				}, 8000);
			};
		if (answer != questions[ask].ans){
			$('#ans').text('Sorry, that is incorrect');
			$('#select').hide();
			$('#ques').hide();
			$('#ans').show();
			setTimeout(function(){
				$('#ans').hide();
				nextQuestion();
				}, 2000);
			};
		ask++;
		};

	$('#button').on('click',function(){
 		gameStart()
 	});
	$('#submit').on('click', function(){
		compare()
	});
	$('#next').on('click', function(){
		ask=0;
		$('#final').hide();
		$('#intro').show();
	});



});
