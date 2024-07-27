'use strict'

let Winner;
const Players = {
    "p1": "",
    "p2": ""
};
const Score = {
    "p1": 0,
    "p2": 0
};
const TicTacToe = [
    "00", "01", "02",
    "10", "11", "12",
    "20", "21", "22"
];
/*
   0,   1,   2
   3,   4,   5
   6,   7,   8
*/
let i = 0;

//Function
function play() {
    i++;
    whosWon();
    if (Winner != undefined) {
        alert("Jogador: " + Players[Winner] + " Ganhou");
        reset();

    } else if (i == 9 && Winner == undefined) {
        alert('Empate');
        reset();
    }
    console.log(i);
}

function whosWon() {
    if ((TicTacToe[0] == TicTacToe[1]) && (TicTacToe[1] == TicTacToe[2])) {
        Winner = TicTacToe[0];
        Score[Winner]++;

    } else if ((TicTacToe[3] == TicTacToe[4]) && (TicTacToe[4] == TicTacToe[5])) {
        Winner = TicTacToe[3];
        Score[Winner]++;

    } else if ((TicTacToe[6] == TicTacToe[7]) && (TicTacToe[7] == TicTacToe[8])) {
        Winner = TicTacToe[6];
        Score[Winner]++;

    } else if ((TicTacToe[0] == TicTacToe[4]) && (TicTacToe[4] == TicTacToe[8])) {
        Winner = TicTacToe[0];
        Score[Winner]++;

    } else if ((TicTacToe[2] == TicTacToe[4]) && (TicTacToe[4] == TicTacToe[6])) {
        Winner = TicTacToe[2];
        Score[Winner]++;

    } else if ((TicTacToe[0] == TicTacToe[3]) && (TicTacToe[3] == TicTacToe[6])) {
        Winner = TicTacToe[0];
        Score[Winner]++;

    } else if ((TicTacToe[1] == TicTacToe[4]) && (TicTacToe[4] == TicTacToe[7])) {
        Winner = TicTacToe[1];
        Score[Winner]++;

    } else if ((TicTacToe[2] == TicTacToe[5]) && (TicTacToe[5] == TicTacToe[8])) {
        Winner = TicTacToe[2];
        Score[Winner]++;
    }
    $("#p1").html(Players.p1 + ': ' + Score.p1);
    $("#p2").html(Players.p2 + ': ' + Score.p2);
    console.log(Winner,Score);
}

function gameOver() {
	
}

function reset() {
	let btnTicTac = document.querySelectorAll(".btnTicTac");
	[].forEach.call(btnTicTac, (btn) => {
		btn.innerHTML = "&nbsp;";
		btn.disabled = false;
	});
	Winner = undefined;
    TicTacToe[0] = "00";
    TicTacToe[1] = "01";
    TicTacToe[2] = "02";
    TicTacToe[3] = "10";
    TicTacToe[4] = "11";
    TicTacToe[5] = "12";
    TicTacToe[6] = "20";
    TicTacToe[7] = "21";
    TicTacToe[8] = "22";
    i = 0;
}

//EventListener
$(".btnTicTac").on('click', (btn) => {
    let who = (i % 2 == 0) ? "p1" : "p2";
    switch (btn.target.id) {
        case "top-left":
            TicTacToe[0] = who;
            break;
        case "top-middle":
            TicTacToe[1] = who;
            break;
        case "top-right":
            TicTacToe[2] = who;
            break;

            //center
        case "center-left":
            TicTacToe[3] = who;
            break;

        case "center-middle":
            TicTacToe[4] = who;
            break;

        case "center-right":
            TicTacToe[5] = who;
            break;

            //bottom
        case "bottom-left":
            TicTacToe[6] = who;
            break;
        case "bottom-middle":
            TicTacToe[7] = who;
            break;
        case "bottom-right":
            TicTacToe[8] = who;
            break;

        default:
            alert("error: whos clicked not found element id");
            break;
    }
    btn.target.innerHTML = '<img src="./img/' + who + '.png" width="100%" width="100%" />';
    btn.target.disabled = true;
    play();
});
$("#game-over").on('click', function () {
    reset();
    Score.p1 = 0;
    Score.p2 = 0;
    $("#reg-players").show();
    document.getElementById("game").hidden = true;
});

$("#reg-players").on('submit', (e) => {
    //prevent form submit
    e.preventDefault();
    document.getElementById("reg-players").style = 'display: none;';
    document.getElementById("game").hidden = false;
    Players.p1 = $("#player-one").val();
    Players.p2 = $("#player-two").val();
    $("#p1").html(Players.p1 + ': ' + Score.p1);
    $("#p2").html(Players.p2 + ': ' + Score.p2);
});