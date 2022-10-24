var turno = 1;
var contMario = 0;
var contLuigi = 0;
var bloqueo = 0;

$( document ).ready(function() {
    $('#puntuacionJ1').text(contMario);
    $('#puntuacionJ2').text(contLuigi);
});

function moverMano(mano){
    if(bloqueo == 0){
        var mano_id = parseInt(mano.id, 10);

        if(turno == 1){
            if(mano_id == 0){
                document.getElementById("manoIzquierda").src = document.getElementById(mano_id).src;
            }else if(mano_id == 1){
                document.getElementById("manoIzquierda").src = document.getElementById(mano_id).src;
            }else if(mano_id == 2){
                document.getElementById("manoIzquierda").src = document.getElementById(mano_id).src;
            }
            if(mano_id<=2){
                document.getElementById("ET").src = document.getElementById("personaJ1").src;
                turno = 2;
            }
            
        }else{
            if(mano_id == 3){
                document.getElementById("manoDerecha").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }else if(mano_id == 4){
                document.getElementById("manoDerecha").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }else if(mano_id == 5){
                document.getElementById("manoDerecha").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }
            if(mano_id>=3){
                document.getElementById("ET").src = document.getElementById("personaJ2").src;
                turno = 1;
            }
            
        }
        
    }
}

function quienEsElGanador(){
    var izq = document.getElementById("manoIzquierda").src;
    var der = document.getElementById("manoDerecha").src;

    if(izq.includes("Papel") && der.includes("Piedra")){
        $("#Ganador").text("Ganador: Mario");
        contMario++;
        $('#puntuacionJ1').text(contMario);
    }else if(izq.includes("Piedra") && der.includes("Papel")){
        $("#Ganador").text("Ganador: Luigi");
        contLuigi++;
        $('#puntuacionJ2').text(contLuigi);
    }

    if(izq.includes("Piedra") && der.includes("Tijera")){
        $("#Ganador").text("Ganador: Mario");
        contMario++;
        $('#puntuacionJ1').text(contMario);
    }else if(izq.includes("Tijera") && der.includes("Piedra")){
        $("#Ganador").text("Ganador: Luigi");
        contLuigi++;
        $('#puntuacionJ2').text(contLuigi);
    }

    if(izq.includes("Tijera") && der.includes("Papel")){
        $("#Ganador").text("Ganador: Mario");
        contMario++;
        $('#puntuacionJ1').text(contMario);
    }else if(izq.includes("Papel") && der.includes("Tijera")){
        $("#Ganador").text("Ganador: Luigi");
        contLuigi++;
        $('#puntuacionJ2').text(contLuigi);
    }

    if((izq.includes("Tijera") && der.includes("Tijera")) || (izq.includes("Papel") && der.includes("Papel")) || izq.includes("Piedra") && der.includes("Piedra")){
        $("#Ganador").text("Empate");
    }

    bloqueo = 1;
}

function reset(){
    bloqueo = 0;
    contMario = 0;
    $('#puntuacionJ1').text(contMario);

    contLuigi = 0;
    $('#puntuacionJ2').text(contLuigi);

    document.getElementById("manoIzquierda").src = "./Recursos/Interrogante.jpg";
    document.getElementById("manoDerecha").src = "./Recursos/Interrogante.jpg";
    document.getElementById("ET").src = "./Recursos/EsperarTurno.jpg";
}

function nextRound(){
    bloqueo = 0;
    document.getElementById("manoIzquierda").src = "./Recursos/Interrogante.jpg";
    document.getElementById("manoDerecha").src = "./Recursos/Interrogante.jpg";
    document.getElementById("ET").src = "./Recursos/EsperarTurno.jpg";
}