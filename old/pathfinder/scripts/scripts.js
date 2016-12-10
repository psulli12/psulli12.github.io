function addTrait() {
	var newTrait = $(".traitChoice")
	.clone()
	.removeClass("traitChoice")
	.appendTo('#traitList');
}

function promptTrait() {
	//stuff
}

function prompt(type, target) {
	$(target).show()
	.removeClass("hidden");
	var scoresType = $(type + " option:selected").text();
	
	if(type=="languages") {
		languageHandler();
	}
}

function languageHandler(){
	if ($(".bonusList").hasClass("hidden"))
		$(".bonusList").removeClass("hidden");

	if ($("#commonRow").hasClass("hidden"))
		$("#commonRow").removeClass("hidden");

	$(".bonusCopy").remove();

	if ($("#languages option:selected").text() == "Standard (0 RP)")
		var counter=7;

	else if ($("#languages option:selected").text() == "Xenophobic (0 RP)") {
		$("#commonRow").addClass("hidden");
		var counter=4;
	}

	if (counter != null) {
		for (i = 1; i < counter; i++) {
			var newLang = $(".bonusList")
			.clone()
			.removeClass("bonusList")
			.addClass("bonusCopy")
			.appendTo('#languageTable');
		}
	}

	else
		$(".bonusList").addClass("hidden");
}

function chooseLanguage(choice){
	$(this).addClass("toCheck");
	var row = $(this).parent().parent();

	if ($(".toCheck option:selected").text() == "Enter custom...") {
		$(".hiddenCustomLanguage")
			.clone()
			.removeClass("hidden")
			.removeClass("hiddenCustomLanguage")
			.addClass("visibleCustomLanguage")
			.appendTo(row);
	}

	else if (row.find($(".visibleCustomLanguage")))
		row.find($(".visibleCustomLanguage")).remove();

	$(this).removeClass("toCheck");
}