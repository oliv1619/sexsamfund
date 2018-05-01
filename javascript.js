$(window).on("load", sidenVises)

function sidenVises() {
    console.log("sidenVises!");
    $("#brian_container").addClass("brian_move_right");
    $("#anders_container").addClass("anders_move_right");
    $("#brian_container").on("animationend", alle_seatter_sig);
    $("#brian_sprite").addClass("brian_stand");
//    $("#anders_sprite").addClass("anders_stand");
    $("#anders_sprite").addClass("anders_walk_cycle");
    $("#school_bell")[0].play();

}

function alle_seatter_sig() {
    console.log("alle_seatter_sig!")
    $("#anders_sprite").removeClass("anders_walk_cycle");
    $("#brian_sprite").removeClass("brian_stand");
    $("#brian_container").off("animationend", alle_seatter_sig);
    $("#brian_sprite").addClass("brian_sit");
    setTimeout(lyd_mobil, 3000);
}

function lyd_mobil() {
    console.log("lyd_mobil!")
    $("#mobil")[0].play();
}
