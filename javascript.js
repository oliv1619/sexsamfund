// - - - - - - - - sideLoad - - - - - - - -

$(window).on("load", sideLoad);



function sideLoad() {
	console.log("sideLoad!");

	// vis startbillede
	$("#startbillede").addClass("vis");

	// gå til startbillede
	startBillede();
}

// - - - - - - - - Scene startBillede - - - - - - - -

function startBillede() {
	console.log("startBillede");

	// Der er klikket på startknap
	$("#startknap").on("click", startknapKlik);
}

function startknapKlik() {
	console.log("startknapKlik!");

	// Start knaplyd effekt_bank
	$("#game_start")[0].play();

	// gå til eleverInd efter tid
	setTimeout(eleverInd, 500);
}

// - - - - - - - - Scene eleverInd - - - - - - - -

function eleverInd() {
	console.log("eleverInd!");

	//	Startbillede fades
	$("#startbillede").addClass("fadeout");


	//	Brian & anders ind
	$("#brian_container").addClass("brian_move_right");
	$("#anders_container").addClass("anders_move_right");

	$("#brian_sprite").addClass("brian_stand");

	$("#anders_sprite").addClass("anders_walk_cycle");

	//	klokkelyd
	$("#school_bell")[0].play();

	//  Trigger - Når lyden Brian er ved sidde possition
	$("#brian_container").on("animationend", alle_saetter_sig);

}

function alle_saetter_sig() {
	console.log("alle_saetter_sig!")

	$("#brian_container").off("animationend", alle_saetter_sig);

	$("#startbillede").removeClass("vis");
	$("#startbillede").addClass("skjul");

	$("#anders_container").removeClass("anders_move_right");
	$("#anders_container").addClass("anders_sidder_possition");

	$("#brian_container").removeClass("brian_move_right");
	$("#brian_container").addClass("brian_sidder_possition");

	$("#anders_sprite").removeClass("anders_walk_cycle");
	$("#anders_sprite").addClass("anders_sit");

	$("#brian_sprite").removeClass("brian_stand");
	$("#brian_sprite").addClass("brian_sit");

	setTimeout(lyd_mobil, 1500);
}

function lyd_mobil() {
	console.log("lyd_mobil!")
	$("#mobil")[0].play();
	$("#anders_container").addClass("anders_mobil_ryster");

	//  Trigger - Når mobil har rystet

	setTimeout(MobilFrem, 2000);
}

// - - - - - - - - Scene MobilFrem - - - - - - - -

function MobilFrem() {
	console.log("MobilFrem!")

	$("#anders_container").off("animationend", MobilFrem);

	$("#anders_sprite").removeClass("anders_sit");
	$("#anders_sprite").addClass("anders_mobil");

	$("#zoomframe").addClass("mobil_frem_zoom");
	//	$("#baggrund").addClass("baggrund_blur");
}
