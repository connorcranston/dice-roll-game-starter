function rollTheDie() {
    console.log("HEY!")
    die.setAttribute('src', 'img/sun.gif');

    roll.textContent = '?';

    setTimeout(function() {
        var num = Math.floor( Math.random() * 10 + 1);
        roll.textContent = num;

        if(turn === player1) {
            player1Position += num;
            movePlayer(player1, player1Position);
            turn = player2;
        }
        else {
            player2Position += num;
            movePlayer(player2, player2Position);
            turn = player1;
        }
    }, 1900);
}

die.addEventListener('click', rollTheDie);
roll.addEventListener('click', rollTheDie);
