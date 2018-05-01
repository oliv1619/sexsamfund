$(window).on("load", sideLoad)



function sideLoad() {
	console.log("sideLoad!");

	// vis startbillede
	$("#startbillede").addClass("vis");

	// gå til startbillede
	startBillede();
}

function startBillede() {
	console.log("startBillede");

	// Der er klikket på startknap
	$("#startknap").on("click", startknapKlik);
}

function startknapKlik() {
	console.log("startknapKlik");

	// Start knaplyd effekt_bank
	$("#game_start")[0].play();

	//  Når lyden har spillet spillet
	setTimeout(eleverInd, 500);
}

function eleverInd() {
	console.log("eleverInd");

	//	Startbillede fades
	$("#startbillede").addClass("fadeout");


	//	Brian & anders ind
	$("#brian_container").addClass("brian_move_right");
	$("#anders_container").addClass("anders_move_right");

	$("#brian_sprite").addClass("brian_stand");

	$("#anders_sprite").addClass("anders_walk_cycle");

	$("#school_bell")[0].play();

	$("#brian_container").on("animationend", alle_seatter_sig);

}

function alle_seatter_sig() {
	console.log("alle_seatter_sig!")

	$("#startbillede").removeClass("vis");
	$("#startbillede").addClass("skjul");

	$("#anders_sprite").removeClass("anders_walk_cycle");
	$("#brian_sprite").removeClass("brian_stand");
	$("#brian_container").off("animationend", alle_seatter_sig);
	$("#brian_sprite").addClass("brian_sit");
	setTimeout(lyd_mobil, 1500);
}

function lyd_mobil() {
	console.log("lyd_mobil!")
	$("#mobil")[0].play();
	$("#anders_container").addClass("anders_mobil_ryster");
}
