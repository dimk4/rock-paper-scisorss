game();
function game()
{
    let comp = 0;
    let player = 0;
    let result;
    while(comp < 3 && player < 3){
        result = compare(computerPlay(), playerPlay());
        //console.log(result);
        if (result >= 0) comp+= result;
        else player++;
        console.log(comp + " " + player);
    }
    if (comp > player) alert("computer has won");
    else if (player > comp) alert("player has won");
}


function computerPlay()
{

    switch(Math.floor(Math.random() * 3)){
        case 0:
            return  "rock";
            break;
        case 1:
            return  "paper";
            break;
        case 2: 
            return  "scissors";
            break;
    }
}
function playerPlay()
{
    let input =(prompt("which do you choose? \n rock paper scissors? "));

    input = input.trim();
    input = input.toLowerCase();
    return input;
}

function compare(a, b)
{
    if (a === b) {
        console.log("computer has chosen - " + a + " it's a draw!");
        return 0;
    }
    if (a == "rock" && b == "scissors") {
        console.log("computer has chosen - " + a + " You have lost a round!");
        return 1;
    }
    else if (a == "paper" && b == "rock") {
        console.log("computer has chosen - " + a + " You have lost a round!");
        return 1;
    }
        else if (a == "scissors" && b == "paper"){ 
            console.log("computer has chosen - " + a + " You have lost a round!");
            return 1;
        }

    console.log("computer has chosen - " + a + " You have won a round!");
    return -1;
}